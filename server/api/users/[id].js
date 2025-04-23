const dbu = require('../../dbUtilsjs.js')

module.exports = async (req, res) => {

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  res.setHeader('Access-Control-Allow-Origin', '*') // or specify your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const userId = req.query.id
  if (req.method === 'GET') {
    const user = await dbu.getUser(userId)
    res.status(200).json(user)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
