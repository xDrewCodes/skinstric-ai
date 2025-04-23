const dbu = require('../dbUtilsjs.js')

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const users = await dbu.getUsers()
    res.status(200).json(users)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
