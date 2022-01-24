const { PrismaClient } = require('@prisma/client')

module.exports.list = (prisma) => async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (e) {
    return res.status(400).send(e);
  }
}