import prisma from '../../lib/prisma'


export default async function handle(req, res) {
  try {
    const annotations = await prisma.annotations.findMany()
    res.json(annotations)
  } catch (error) {
    console.error(error)
  }
}

