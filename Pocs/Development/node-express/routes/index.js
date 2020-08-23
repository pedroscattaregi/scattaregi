const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    res.send('hello from routes folder')

})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.get('/:profile/:username', (req, res) => {
    const profile = req.params.profile
    const username = req.params.username

    res.json({
        profile: profile,
        username: username
    })
})

router.get('/query', (req, res) => {
    const name = req.query.name
    res.json({
        query: 'test',
        person: {
            name: name
        }
    })
})

router.get('/form', (req, res) => {
    res.render('form', null)
})

router.post('/post', (req, res) => {
    const body = req.body

    res.json({
        status_message: 'success',
        data: body
    })
})

module.exports = router