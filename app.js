const express = require('express');
const path = require('path');
const app = express();

// Konfigurasi EJS sebagai View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mengatur folder 'public' sebagai tempat menyimpan aset statis (CSS, Gambar, dll)
app.set('public', path.join(__dirname, 'public'));
app.use(express.static('public'));

// Import rute-rute modular
const indexRoutes = require('./routes/index');

// Gunakan rute yang sudah di-import
app.use('/', indexRoutes);

// Jalankan server
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server berjalan mulus di http://localhost:${PORT}`);
    });
}


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server berjalan mulus di http://localhost:${PORT}`);
// });
module.exports = app;