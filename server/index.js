import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './src/routers/product.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/",router)

const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT

mongoose.connect(url).then(()=>console.log("connected")).catch((error)=>console.log(error))

app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})