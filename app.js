const express = require('express')
const app = express()

const PORT = 8877

app.get('/list', (req, res) => {
    res.json({
        'posts': [
            {
                'id': '1',
                'title': 'test',
                'parentId': ''
            }
        ]
    })
})

app.get('/', (req, res) => {
    res.json({
        'status': 'OK'
    })
})


app.listen(PORT, () => {
    console.log('escutando')
})