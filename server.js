const express = require('express')
const router = require('./router')
const app = new express()


// 路由
/* app.use('/',(req,res,next) => {
    console.log(`----------1------------`);
    console.log('router',router);
    // res.send('hello')// 只有第一个send()有效
    next()
})

app.use('/api',(req,res) => {
    console.log(`----------2s------------`);

    res.send('world')
}) */


app.use(router)

app.listen(8080,() => {
    console.log(`----------connection------------`);
})