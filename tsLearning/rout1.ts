import express from "express";
const app = express();

app.use(express.json());

interface signUp {
  userId: string;
  password: string;
}

app.post("/submit", (req, res) => {
  const body: signUp = req.body;
  if (typeof body.userId !== "string") {
    res.status(400).json({
      message: "invalid userId",
    });
    return;
  }
  if (typeof body.password !== "string") {
    res.status(400).json({
      message: "invalid password", // use zod to  privant run error because typescript is only for comile time after compile it
      // javascript will run in js does't have type so be use zod or manually write condition to check typw
    });
    return;
  }

  res.json({
    message: "sign up succesful",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
