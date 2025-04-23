import { getUser, getUsers } from '../../dbUtilsjs.js'  // or wherever your function lives

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const userId = req.query.id

  let users = await getUsers()
  users = users[0].id

  console.log(users)

  res.status(200).json(await getUser(userId))

}
