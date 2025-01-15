// Import PatientController
const PatientController = require("../controllers/PatientController");

const express = require("express");
const router = express.Router();

// Route utama untuk welcome
router.get("/", (req, res) => {
  res.send("Welcome to Patient API");
});

// Route untuk pasien
router.get("/patients", PatientController.index); // Menampilkan semua pasien
router.post("/patients", PatientController.store); // Menambahkan pasien baru
router.put("/patients/:id", PatientController.update); // Mengupdate pasien berdasarkan ID
router.delete("/patients/:id", PatientController.destroy); // Menghapus pasien berdasarkan ID
router.get("/patients/:id", PatientController.show); // Menampilkan detail pasien berdasarkan ID
router.get("/patients/search/:name", PatientController.search); // Mencari pasien berdasarkan nama
router.get("/patients/status/:status", PatientController.findByStatus); // Mencari pasien berdasarkan status

// Export router
module.exports = router;
