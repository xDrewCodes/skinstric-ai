import { editUser } from '../../lib/dbUtils'  // or wherever your function lives

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
  const { name, location, image, age, gender, race, races, genders, ages } = req.body

  if (!userId || !name || !location) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const result = await editUser(
    userId,
    name,
    image,
    location,
    age,
    gender,
    race,
    races,
    genders,
    ages
  )

  if (result) {
    return res.status(200).json(result)
  } else {
    return res.status(500).json({ error: 'Failed to update user' })
  }
}
