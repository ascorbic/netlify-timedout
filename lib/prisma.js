import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  console.log("getting production prisma")
  prisma = new PrismaClient()
  console.log("got production prisma")
} else {
  if (!global.prisma) {
    console.log("getting global prisma")
    global.prisma = new PrismaClient()
    console.log("got global prisma")
  } else {
    console.log("reusing global prisma")
  }
  prisma = global.prisma
}

export default prisma