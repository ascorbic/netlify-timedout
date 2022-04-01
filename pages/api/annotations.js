// import prisma from '../../lib/prisma'


export default async function handle(req, res) {
  try {
    console.log("about to get annotations")
    // console.log(prisma)
    res.json({hello: 1})
    // const annotations = await prisma.annotations.findMany()
    // console.log("got annotations")
    // res.json(annotations)
  } catch (error) {
    console.error(error)
  }
}

