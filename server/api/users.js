const dbu = require('../dbUtilsjs.js')

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

  if (req.method === 'GET') {
    const users = await dbu.getUsers()
    res.status(200).json(users)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
