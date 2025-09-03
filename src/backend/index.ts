import dotenv from "dotenv"
import { app } from "./app"
import connectDB from "./db"



dotenv.config({
    path: "../.env",
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on ${process.env.PORT}`)
        })
    })
    .catch((error) => { console.log("Mongodb connection error", error) })