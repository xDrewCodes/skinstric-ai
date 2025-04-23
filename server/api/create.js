const dbu = require('../dbUtilsjs.js')

module.exports = async (req, res) => {
  // Always set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Reject anything that's not POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const name = req.query.name
    const loc = req.query.location

    // Validate basic input (optional)
    if (!name || !loc) {
      return res.status(400).json({ error: 'Missing name or location' })
    }

    const createdUser = await dbu.createUser(name, loc)
    return res.status(200).json(createdUser)
  } catch (err) {
    console.error('Error in create API:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
