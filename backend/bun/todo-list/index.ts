import express from "express";

const app = express();

app.use(express.json());

interface bodytype {
  user: string;
  password: string;
  email: string;
}

let arr: bodytype[] = [];

app.post("/singin", (req, res) => {
  const { user, password, email }: bodytype = req.body;
  arr.push({ user, password, email });
  res.status(200).json({
    singin: "sucessfully singin",
  });
});

app.post("/singup", (req, res) => {
  const { user, password, email }: bodytype = req.body;
  const findder: boolean = arr.some((ele) => {
    return (
      ele.user === user && ele.password === password && ele.email === email
    );
  });
  if (findder) {
    res.status(200).json({
      singin: "sucessfully singin",
    });
  } else {
    res.status(400).json({
      singup: "invalid user cadintion",
    });
  }
});

app.delete("/deleteuser", (req, res) => {
  const { user, password, email }: bodytype = req.body;
  const findder: boolean = arr.some(
    (ele) =>
      ele.user === user && ele.password === password && ele.email === email,
  );

  if (findder) {
    arr = arr.filter(
      (ele) =>
        !(
          ele.user === user &&
          ele.password === password &&
          ele.email === email
        ),
    );
    res.status(200).json({
      account: "account deleted succesfull",
    });
  } else {
    res.status(400).json({
      messange: "invalid user",
    });
  }
});

const PORT = 999;
app.listen(PORT, () => {
  console.log("app is listening at 999");
});
