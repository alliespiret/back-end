const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const loginRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET,OPTIONS,PATCH,DELETE,POST,PUT']
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoutes);

app.use(helmet());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  