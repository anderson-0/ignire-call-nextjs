import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { username, name } = req.body
  if (!username || !name) {
    return res.status(400).json({ message: 'Missing username and/or password' })
  }

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({ message: 'Username already exists' })
  }

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  })

  setCookie({ res }, '@ignitecall:userId', user.id, {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  })
  return res.status(201).json(user)
}
