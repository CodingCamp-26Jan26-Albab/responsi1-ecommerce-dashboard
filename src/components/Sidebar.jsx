import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-dark-custom text-white border-end" id="sidebar-wrapper">
      <div className="sidebar-heading p-3 border-bottom fs-5 fw-bold text-center">
        <i className="bi bi-bag-check-fill me-2 text-warning"></i>Store
        Dashboard
      </div>
      <div className="list-group list-group-flush mt-3">
        <a
          href="#dashboard"
          className="list-group-item list-group-item-action bg-transparent text-white active p-3"
        >
          <i className="bi bi-box-seam me-2"></i> Manajemen Produk
        </a>
        <a
          href="#kategori"
          className="list-group-item list-group-item-action bg-transparent text-white-50 p-3"
        >
          <i className="bi bi-tags me-2"></i> Kategori
        </a>
        <a
          href="#pesanan"
          className="list-group-item list-group-item-action bg-transparent text-white-50 p-3"
        >
          <i className="bi bi-cart me-2"></i> Pesanan
        </a>
        <a
          href="#pengaturan"
          className="list-group-item list-group-item-action bg-transparent text-white-50 p-3"
        >
          <i className="bi bi-gear me-2"></i> Pengaturan
        </a>
      </div>
    </div>
  );
}
