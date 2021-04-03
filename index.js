const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");

//Load input Validations
const validateRegisterInput = require("./validator/register");

const port = process.env.PORT || 5000;
const API_URL = "http://localhost:1337";

//MiddleWares
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(session({ name: "jwt", keys: ["this is a secret key"] }));

// Routes

app.get("/api/hi", (req, res) => {
  console.log("session", req.session.jwt);
  res.send({ status: "ok" });
});

//Login
app.post("/api/auth/local", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(500).json(errors);
  }
  const loginRes = await axios({
    method: "POST",
    url: `${API_URL}/auth/local`,
    data: req.body
  });
  console.log(loginRes.data);

  // data is send without the jwt token to the frontend
  const { jwt, user } = loginRes.data;
  const data = { user };
  req.session.jwt = jwt;
  res.send(data);
  console.log("SESSION JWT", req.session.jwt);
});

//Signup
app.post("/api/auth/local/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  console.log(req.body);
  //check validations
  if (!isValid) {
    return res.status(401).json(errors);
  }

  const signUpRes = await axios({
    method: "POST",
    url: `${API_URL}/auth/local/register`,
    data: req.body
  });
  //   console.log(signUpRes);
  const { jwt, user } = signUpRes.data;
  const data = { user };
  req.session.jwt = jwt;
  // console.log(data);
  res.send(data);
});

// //FIle upload
app.post("/api/upload", async (req, res) => {
  const jwtToken = req.session.jwt;
  console.log("req-bodyof file upload", req.body);
  const upload_res = await axios({
    method: "POST",
    url: `${API_URL}/upload`,
    data: req.body
  });
  console.log("upload-res", upload_res);
  // data is send without the jwt token to the frontend
  // const { jwt, user } = upload_res.data;
  // const data = { user };
  // req.session.jwt = jwt;
  res.send(upload_res);
});

// Update the user's data in the users content type
app.put("/api/users/:userId", async (req, res) => {
  const jwtToken = req.session.jwt;
  const data = req.body;
  console.log(data);
  const { userId } = req.params;

  console.log("UpdataData: ", data);
  console.log("UpdataId:", userId);
  console.log("Updatajwt:", jwtToken);

  const updateUserRes = await axios({
    method: "PUT",
    url: `${API_URL}/users/${userId}`,
    data,
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
  // console.log("update ", updateUserRes);
});

// get the specific user from authorized data
app.get("/api/users/me", async (req, res) => {
  const jwtToken = req.session.jwt;
  const meRes = await axios({
    method: "GET",
    url: `${API_URL}/users/me`,
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
  console.log("users/me ", meRes.data);
  res.send(meRes.data);
});

//logout user
app.get("/users/logout", (req, res) => {
  req.session.jwt = null;
  res.send({ status: 200 });
});

app.get("/api/products", async (req, res) => {
  const productsRes = await axios({
    method: "GET",
    url: `${API_URL}/products`
  });
  res.send(productsRes.data);
});

// app.get("/api/graphql", async (req, res) => {
//   const productsRes = await axios({
//     method: "GET",
//     url: `${API_URL}/graphql`
//   });
//   res.send(productsRes.data);
// });

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"))
);

// Finished Setup
app.listen(port, () =>
  console.log(`Arzish Express server listening at http://localhost:${port}`)
);
