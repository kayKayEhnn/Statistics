module.exports = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/html'
  })
  res.end('<h1>404 Page Not Found</h1>')
}
