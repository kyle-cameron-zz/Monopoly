
module.exports = (io) => {
  let user = 0
  let userStorage = []
  io.on('connection', function (socket) {
    socket.on('player joined', (data) => {
      userStorage.push(data)
      user++
      if (user > 1) {
        io.sockets.emit('start game', userStorage)
      }
    })
  })
}
