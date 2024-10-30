const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/students', studentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
