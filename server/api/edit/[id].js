import { editUser } from '../../dbUtilsjs.js'  // or wherever your function lives

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const userId = req.query.id
  const { name, location, age, race, gender, image, demos } = req.body


  res.status(200).json(await editUser(
    userId,
    name,
    image,
    location,
    age,
    race,
    gender,
    demos
  ))

}
