// index.js
import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`connection on port ${port}`);
});
