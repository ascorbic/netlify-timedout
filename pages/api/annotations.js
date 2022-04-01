import prisma from '../../lib/prisma'


export default async function handle(req, res) {
  try {
    console.log("about to get annotations")
    const annotations = await prisma.annotations.findMany()
    console.log("got annotations")
    res.json(annotations)
  } catch (error) {
    console.error(error)
  }
}

