const dbu = require('../../dbUtilsjs.js')

module.exports = async (req, res) => {
  const userId = req.query.id
  if (req.method === 'GET') {
    const user = await dbu.getUser(userId)
    res.status(200).json(user)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
