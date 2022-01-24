module.exports = [
  {
    method: 'get',
    path: '/users',
    handler: (prisma) => require('./users').list(prisma)
  }
]