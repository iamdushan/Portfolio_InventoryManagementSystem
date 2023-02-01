import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express(); //assign the express() to app variable to create express() app
const PORT = process.env.PORT || "8090";

app.use(cors()); //use the cors() package (to restrict 3rd party req)
app.use(express.json({ limit : "20mb" })); //to customize req body data

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
}); //to start express() app