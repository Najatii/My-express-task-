const Express = require("express");
const app = Express();
const port = 8002;
app.use(Express.json());

app.get("/home", (req, res) => {
  res.send("found User");
});

app.post("/save", (req, res) => {
  console.log(req.body);
  res.status(202).json({ message: " successfully created" });
});

app.post("/save", (req, res) => {
  if (req.body.username == "" || req.body.password == "") {
    return req.body;
  }
  res.status(202).json({ message: " username or password can not be empty" });
});

app.delete("/delete", (req, res) => {
  console.log(req.query);
  if (req.query.id === "") {
    return res.status(201).json({
      message: "user deleted ",
    });
  }
  res.status(201).json({
    message: "user created",
  });
});

app.listen(port);
