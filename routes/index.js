const express = require('express');
const router = express.Router();

// Halaman Beranda (Hero Section)
router.get('/', (req, res) => {
    res.render('index', { title: 'Adyanto Wahyudhi Nugroho | Portfolio' });
});

// Halaman Tentang Saya
router.get('/about', (req, res) => {
    res.render('about', { title: 'Tentang Saya' });
});

// Halaman Proyek/Portfolio
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Proyek & Karya' });
});

// Halaman Keahlian
router.get('/skills', (req, res) => {
    res.render('skills', { title: 'Keahlian' });
});

// Halaman Kontak
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Hubungi Saya' });
});

// Halaman Sertifikasi
router.get('/certificates', (req, res) => {
    res.render('certificates', { title: 'Sertifikasi & Penghargaan' });
});
module.exports = router;