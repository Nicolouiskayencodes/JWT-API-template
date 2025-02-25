const prisma = require('./prisma.js');

async function createUser(username, password) {
  try{
  await prisma.user.create({
    data: {
      username: username,
      password: password,
    }
  })
} catch(error){
  return 'failed'
}
}
async function getLoginUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      username: username
    },
    select: {
      username: true,
      password: true,
    },
  })
  return user;
}
async function getUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      username: username
    },
  })
  return user
}

module.exports = { createUser, getLoginUser, getUser}