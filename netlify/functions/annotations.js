import prisma from '../../lib/prisma'


export async function handler(event) {
  try {
    console.log("about to get annotations")
    const annotations = await prisma.annotations.findMany()
    console.log("got annotations")
    return{
      statusCode: 200,
      body: JSON.stringify(annotations),
      headers: {
        'Content-Type': 'application/json',
      }
    }
  } catch (error) {
    console.error(error)
  }
}

