// const path = require('path');
// const express = require('express');
//
// const app = express();
// const port = process.env.PORT || 3000;
// // Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../sass');
// const viewsPath = path.join(__dirname, '../index.html');
// // const partialsPath = path.join(__dirname, '../templates/partials');
//
// // Setup static directory to serve
// app.use(express.static(publicDirectoryPath));
//
// app.get('', (req, res) => {
//
//     res.sendFile(viewsPath);
// });
//
// app.listen( port, () => {
//     console.log('Server is up on port ' + port)
// });
const express = require('express');
const path = require('path');
const app = express();
// const publicDirectoryPath = path.join(__dirname, '../sass');
app.use('/sass',express.static('./sass'));
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, () => console.log('server started on port', port));
