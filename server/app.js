const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get('/throw-error', (req, res) => {
  throw new Error('An error occurred!');
});

// https://stackoverflow.com/questions/11500204/how-can-i-get-express-js-to-404-only-on-missing-routes
// app.use(function (err, req, res, next) {
//   // console.error(err);
//   if (err instanceof NotFound) {
//     res.render('404.jade');
//   } else {
//     next(err);
//   }
// });
app.use((req, res, next) => {
  res.status(404).json({
    message: "Sorry, the requested resource couldn't be found",
    statusCode: 404
  });
  next();
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
