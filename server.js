let users = [];

app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered" });
});

app.post("/login", (req, res) => {
  let user = users.find(u => u.email === req.body.email && u.password === req.body.password);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});