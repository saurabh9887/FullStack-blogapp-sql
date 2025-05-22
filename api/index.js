import express from "express";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

app.listen(5000, () => {
  console.log("App is listening");
});
