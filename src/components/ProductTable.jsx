import React from "react";

export default function ProductTable({ products, onEdit, onDelete }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Diskon (%)</th>
            <th>Stok</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-muted">
                Belum ada produk terdaftar.
              </td>
            </tr>
          ) : (
            products.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td className="fw-semibold">{prod.nama}</td>
                <td>
                  <span className="badge bg-secondary">{prod.kategori}</span>
                </td>
                <td>{formatRupiah(prod.harga)}</td>
                <td>
                  {prod.diskon > 0 ? (
                    <span className="badge bg-danger">{prod.diskon}%</span>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <span
                    className={`badge ${prod.stok < 5 ? "bg-warning text-dark" : "bg-success"}`}
                  >
                    {prod.stok} unit
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => onEdit(prod)}
                  >
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(prod.id)}
                  >
                    <i className="bi bi-trash"></i> Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
