const dbu = require('../dbUtilsjs.js')

module.exports = async (req, res) => {
  const name = req.query.name
  const loc = req.query.location

  if (req.method === 'POST') {
    const createdUser = await dbu.createUser(name, loc)
    res.status(200).json(createdUser)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
