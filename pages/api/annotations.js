// const { connectToDatabase } = require('../../lib/mongodb');
// const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {

//   // switch the methods
//   switch (req.method) {
//       case 'GET': {
//           return getAllAnnotations(req, res);
//       }
//       // case 'PUT': { ... }
//   }
// }

// async function getAllAnnotations(req,res){
//   try {
//       // connect to the database
//       const { db } = await connectToDatabase();

//       // fetch the annotations
//       let annotations = await db
//           .collection('annotations')
//           .find({})
//           .sort({ id: 1 })
//           .toArray();

//       // return the annotations
//       return res.json({
//         annotations: JSON.parse(JSON.stringify(annotations)),
//           success: true,
//       });
//   } catch (error) {
//       console.error(error)
//   }
// }

import prisma from '../../lib/prisma'


export default async function handle(req, res) {
  try {
    const annotations = await prisma.annotations.findMany()
    res.json(annotations)
  } catch (error) {
    console.error(error)
  }
}

