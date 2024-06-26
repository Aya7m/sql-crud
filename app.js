import express from 'express'
import postRouter from './modules/posts/posts.routers.js'
import connection from './db/connectiondb.js'
import cors from 'cors'
const app = express()
const port =process.env.port || 3000

app.use(cors())
connection

app.get('/',(req,res)=>{
    res.status(200).json({message:'hello on my project'})
})
app.use(express.json())
app.use('/posts',postRouter)




app.use('*',(req,res)=>{
    res.status(404).json({message:'not found'})
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))