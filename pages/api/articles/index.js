// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import posts from '../../../mockData/Post'
export default function handler(req, res) {
  res.status(200).json(posts)
}