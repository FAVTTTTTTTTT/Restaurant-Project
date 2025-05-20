const express = require('express');
const app = express();
const path = require('path');

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, JS, Ảnh...)
app.use(express.static(path.join(__dirname, 'public')));

// Routers


// Start server
app.listen(3000, () => console.log('Server chạy ở http://localhost:3000'));
// Kết nối MongoDB  
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:123@cluster0.hn2c0jn.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));
// Middleware để parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware để xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Middleware để xử lý 404
app.use((req, res, next) => {
  res.status(404).send('Sorry, can\'t find that!');
});
// Middleware để xử lý 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Middleware để xử lý 403
app.use((req, res, next) => {
  res.status(403).send('Forbidden');
});
// Middleware để xử lý 401
app.use((req, res, next) => {
  res.status(401).send('Unauthorized');
});
// Middleware để xử lý 400
app.use((req, res, next) => {
  res.status(400).send('Bad Request');
});
// Middleware để xử lý 408
app.use((req, res, next) => {
  res.status(408).send('Request Timeout');
});