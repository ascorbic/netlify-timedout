import prisma from '../../lib/prisma'
console.log("imported annotations module", new Date().toISOString())

export default async function handle(req, res) {
  try {
    console.log("about to get annotations")
    console.log(prisma)
    const annotations = await prisma.annotations.findMany()
    console.log("got annotations")
    res.json(annotations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
}

