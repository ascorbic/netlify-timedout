// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
console.log("imported hello module", new Date().toISOString())

export default function handler(req, res) {
  console.log('returning hello world')
  res.status(200).json({ name: 'John Doe' })
}
