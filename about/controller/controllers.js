const constants = require('../../constants/constants')

const template = {
  main: 'pages/about.html'
}



const GET = (req, res) => {
  res.render(template.main, { ctx: constants.ctx })
}


module.exports = {
  GET: GET
}