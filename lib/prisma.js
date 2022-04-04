import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  console.timeLog("request", "getting production prisma")
  prisma = new PrismaClient()
  console.timeLog("request", "got production prisma")
} else {
  if (!global.prisma) {
    console.timeLog("request", "getting global prisma")
    global.prisma = new PrismaClient()
    console.timeLog("request", "got global prisma")
  } else {
    console.timeLog("request", "reusing global prisma")
  }
  prisma = global.prisma
}

export default prisma