const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// https://github.com/nathanieldcooke/week10-day2/blob/main/practice-for-week-10-express-error-handling-404/server/app.js
// Custom error handler.
app.use((req, res, next) => {
  const err = { message: 'blah' };
  next(err);
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
app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).json({
    message: "Sorry, the requested resource couldn't be found",
    statusCode: 404
  });
  next();
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
