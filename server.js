import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("static"));

// app.get("/", function (req, res) {
//     res.send("hello");
// })
// list of 5 items
app.get("/items", function (req, res) {
    const items = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
    ];
    res.send(items);
})
const port= process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
