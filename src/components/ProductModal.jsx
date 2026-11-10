import React, { useState, useEffect } from "react";

export default function ProductModal({
  show,
  onClose,
  onSave,
  currentProduct,
}) {
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "Elektronik",
    harga: "",
    diskon: 0,
    stok: "",
  });

  useEffect(() => {
    if (currentProduct) {
      setFormData(currentProduct);
    } else {
      setFormData({
        nama: "",
        kategori: "Elektronik",
        harga: "",
        diskon: 0,
        stok: "",
      });
    }
  }, [currentProduct, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              {currentProduct ? "Edit Produk" : "Tambah Produk Baru"}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Kategori</label>
                <select
                  className="form-select"
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                >
                  <option value="Elektronik">Elektronik</option>
                  <option value="Pakaian">Pakaian</option>
                  <option value="Makanan">Makanan & Minuman</option>
                  <option value="Aksesoris">Aksesoris</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Harga (Rp)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="harga"
                    value={formData.harga}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Diskon (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="diskon"
                    value={formData.diskon}
                    onChange={handleChange}
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Stok</label>
                <input
                  type="number"
                  className="form-control"
                  name="stok"
                  value={formData.stok}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
