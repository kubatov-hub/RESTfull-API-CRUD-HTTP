import express from "express";
import mongoose from 'mongoose';
import router from "./router.js";

const PORT = 5000
const DB_URL = 'mongodb+srv://simik:<your password>@cluster0.hxzta.mongodb.net/'

const app = express()
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {console.log('Server ON')})
    } catch(e) {
        console.log(e)
    }
}

startApp()