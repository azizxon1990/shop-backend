const express = require("express")
const http = require("http")
const cors = require('cors')

const {corsConfig} = require('./config/serverConfig')

const app = express()
const server = http.createServer(app)

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded());

//import routes
const auth = require("./middleware/auth")
const loginRoutes = require('./routes/login')
const userRoutes = require('./routes/users')
const categoryRoutes = require('./routes/categories')


//API rotes
app.use('/auth', loginRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)

app.get("/", auth, (req, res) => {
  res.redirect('dashboard')
})

app.get('/404',(req, res, next) => {
  res.json({message:"404"})
})

app.use((req, res, next) => {
  res.json({message:"404"})
})



server.listen(3000, function () {
  console.log("server is listening on port: 3000");
});
