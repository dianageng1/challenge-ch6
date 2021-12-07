const path = require('path')
const route = require('express').Router()
const axios = require('axios')
const dir = '../public/static/'


const usersSorting = (arr) => {
  arr.users.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    return 0
  })
  return arr
}

route.get('/users', (req, res) => {
  axios.get(url).then((response) => {
    let usersJson = usersSorting(response.data)
    res.json(usersJson)
  })
})

// Chapter 3 Route
route.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter3/index.html'))
})

// Chapter 4 Route
route.get('/chapter4', (req, res) => {
  res.sendFile(path.join(__dirname, dir + 'chapter4/landing.html'))
})


route.get('*', (req, res) => {
  res.json({
    info: 'Please use these endpoints: /chapter3, /chapter4, /users',
  })
})

module.exports = route
