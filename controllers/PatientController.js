// Import Model Patient
const Patient = require("../models/Patient");

class PatientController {
  // Menampilkan semua data pasien
  async index(req, res) {
    try {
      const patients = await Patient.all();
      const data = {
        message: "Menampilkan semua pasien",
        data: patients,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data pasien.",
        error: err.message,
      });
    }
  }

  // Menambahkan data pasien baru
  async store(req, res) {
    try {
      const { name, phone, address, status, in_date_at, out_date_at } = req.body;

      // Validasi input
      if (!name || !phone || !address || !status || !in_date_at) {
        return res.status(400).json({
          message: "Semua field (name, phone, address, status, in_date_at) harus diisi.",
        });
      }

      // Menambahkan pasien ke database
      const patient = await Patient.create({
        name,
        phone,
        address,
        status,
        in_date_at,
        out_date_at,
      });

      const data = {
        message: "Menambahkan data pasien",
        data: patient,
      };
      res.status(201).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data pasien.",
        error: err.message,
      });
    }
  }

  // Mengupdate data pasien
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, phone, address, status, in_date_at, out_date_at } = req.body;

      // Validasi input
      if (!name || !phone || !address || !status || !in_date_at) {
        return res.status(400).json({
          message: "Semua field (name, phone, address, status, in_date_at) harus diisi.",
        });
      }

      // Mengupdate data pasien
      const updatedPatient = await Patient.update(id, { name, phone, address, status, in_date_at, out_date_at });

      if (!updatedPatient) {
        return res.status(404).json({
          message: `Pasien dengan id ${id} tidak ditemukan.`,
        });
      }

      const data = {
        message: `Mengedit data pasien dengan id ${id}`,
        data: updatedPatient,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengupdate data pasien.",
        error: err.message,
      });
    }
  }

  // Menghapus data pasien
  async destroy(req, res) {
    try {
      const { id } = req.params;

      // Menghapus data pasien
      const deleted = await Patient.delete(id);

      if (!deleted) {
        return res.status(404).json({
          message: `Pasien dengan id ${id} tidak ditemukan.`,
        });
      }

      const data = {
        message: `Menghapus pasien dengan id ${id}`,
        data: null,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menghapus data pasien.",
        error: err.message,
      });
    }
  }

  // Menampilkan detail pasien berdasarkan ID
  async show(req, res) {
    try {
      const { id } = req.params;

      // Mencari pasien berdasarkan ID
      const patient = await Patient.find(id);

      if (!patient) {
        return res.status(404).json({
          message: `Pasien dengan id ${id} tidak ditemukan.`,
        });
      }

      const data = {
        message: `Menampilkan detail pasien dengan id ${id}`,
        data: patient,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menampilkan detail pasien.",
        error: err.message,
      });
    }
  }

  // Mencari pasien berdasarkan nama
  async search(req, res) {
    try {
      const { name } = req.params;

      // Mencari pasien berdasarkan nama
      const patients = await Patient.search(name);

      if (patients.length === 0) {
        return res.status(404).json({
          message: `Tidak ada pasien yang ditemukan dengan nama ${name}`,
        });
      }

      const data = {
        message: `Mencari pasien dengan nama ${name}`,
        data: patients,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mencari data pasien.",
        error: err.message,
      });
    }
  }

  // Menampilkan pasien berdasarkan status
  async findByStatus(req, res) {
    try {
      const { status } = req.params;

      // Menampilkan pasien berdasarkan status
      const patients = await Patient.findByStatus(status);

      if (patients.length === 0) {
        return res.status(404).json({
          message: `Tidak ada pasien dengan status ${status}`,
        });
      }

      const data = {
        message: `Menampilkan pasien dengan status ${status}`,
        data: patients,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menampilkan pasien berdasarkan status.",
        error: err.message,
      });
    }
  }
}

// Membuat object PatientController
const object = new PatientController();

// Export object PatientController
module.exports = object;
