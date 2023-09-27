import express from "express";
import { Users } from "./user.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  const q = req.query.q.toLowerCase();

  const searchKeys = ["first_name", "last_name", "email"];

  function search(data) {
    console.log("q: ", q);
    return data.filter((item) =>
      searchKeys.some((key) => item[key].toLowerCase().includes(q))
    );
    // .includes(q)
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Start server with port ${port}`);
});
