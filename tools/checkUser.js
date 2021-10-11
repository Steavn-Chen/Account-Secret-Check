function checkUser (email, password, users) {
  for (let user of users) {
    if (user.email === email && user.password === password) return { ...user, message: 'success' }
  } return { message: 'warning' }
}

module.exports = { checkUser }