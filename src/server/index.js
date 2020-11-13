import app from 'server/app'

const port = Number.parseInt(process.env.PORT, 10) || 3000

app.listen(port, '0.0.0.0', () => {
  console.info('app running on port', port)
})
