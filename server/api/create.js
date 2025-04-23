const dbu = require('../dbUtilsjs.js')

module.exports = async (req, res) => {
  const name = req.query.name
  const loc = req.query.location

  res.setHeader('Access-Control-Allow-Origin', '*') // or specify your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'POST') {
    const createdUser = await dbu.createUser(name, loc)
    res.status(200).json(createdUser)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
