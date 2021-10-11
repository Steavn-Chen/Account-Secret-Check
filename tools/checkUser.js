// 第三種 for迴圈
// function checkUser(email, password, usersArr) {
//   for (let i = 0; i < usersArr.length; i++) {
//     if (usersArr[i].email === email && usersArr[i].password === password) return usersArr[i]
//   } return null
// }

// 第三種 for of 遍歷陣列
// function checkUser(email, password, users) {
//   for (let user of users) {
//     if (user.email === email && user.password === password) return user
//   } return null
// }

// 第四種 for of 加 ...展開陣列
function checkUser(email, password, users) {
  for (let user of users) {
    if (user.email === email && user.password === password) return { ...user, message: 'success' }
  } return { message: 'warning' }
}

module.exports = { checkUser }