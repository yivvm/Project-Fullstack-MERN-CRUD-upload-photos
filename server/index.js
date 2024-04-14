import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";

import postRoutes from "./routes/posts.js";

const app = express();

connectDB();

app.use(express.json({ limit: "30mb" }));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// const CONNECTION_URL =
//   "mongodb+srv://yiwenzwork:haojiemei123@cluster-1st.srwczkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1st";
const PORT = process.env.PORT || 5001;

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   )
//   .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
