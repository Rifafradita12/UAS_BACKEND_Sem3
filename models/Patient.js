// import database
const db = require("../config/database");

// membuat class Model Patient
class Patient {
  // Method untuk mengambil semua data pasien
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Method untuk menambahkan data pasien
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO patients (name, phone, address, status, in_date_at, out_date_at, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        data.name,
        data.phone,
        data.address,
        data.status,
        data.in_date_at,
        data.out_date_at || null,
        new Date(),
        new Date(),
      ];

      db.query(sql, values, (err, result) => {
        if (err) reject(err);
        resolve({
          id: result.insertId,
          ...data,
          created_at: values[6],
          updated_at: values[7],
        });
      });
    });
  }

  // Method untuk mengupdate data pasien berdasarkan ID
  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = `
        UPDATE patients
        SET name = ?, phone = ?, address = ?, status = ?, in_date_at = ?, out_date_at = ?, updated_at = ?
        WHERE id = ?
      `;
      const values = [
        data.name,
        data.phone,
        data.address,
        data.status,
        data.in_date_at,
        data.out_date_at || null,
        new Date(),
        id,
      ];

      db.query(sql, values, (err, result) => {
        if (err) reject(err);
        if (result.affectedRows === 0) {
          resolve(null); // Jika tidak ada row yang diperbarui
        } else {
          resolve({ id, ...data, updated_at: values[6] });
        }
      });
    });
  }

  // Method untuk menghapus data pasien berdasarkan ID
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, [id], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  }

  // Method untuk mencari pasien berdasarkan ID
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, [id], (err, result) => {
        if (err) reject(err);
        resolve(result[0]); // Mengembalikan satu pasien jika ditemukan
      });
    });
  }

  // Method untuk mencari pasien berdasarkan nama
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name LIKE ?";
      db.query(sql, [`%${name}%`], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  // Method untuk mencari pasien berdasarkan status
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, [status], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

// export class Patient
module.exports = Patient;
