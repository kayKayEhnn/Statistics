const express = require('express')
const handlebars = require('../middleware/handlebars')
const cookieParser = require('cookie-parser')
const newPeaks = require('../middleware/newPeaks')

module.exports = (app, config) => {
  if (config.env === 'production') app.enable('view cache')
  app.engine('handlebars', handlebars().engine)
  app.set('view engine', 'handlebars')

  app.use(cookieParser())
  app.use(newPeaks)
  app.use(express.static('public'))
}
