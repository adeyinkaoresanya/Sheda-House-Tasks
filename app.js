import express from "express";
import router from "./route.js";

const app = express()

const PORT = 3000


app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})
