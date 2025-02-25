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
  if (user) { await prisma.user.update({
    where: {
      username: username
    },
    select: {
      username: true,
      password: true,
    },
    data: {
      lastActive: new Date(),
    },
  })
  return user;
}}

module.exports = { createUser, getLoginUser,}