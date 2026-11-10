import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-primary">
          <i className="bi bi-shop me-2"></i>E-Commerce Admin
        </span>
        <div className="d-flex align-items-center">
          <div className="me-3 text-end d-none d-sm-block">
            <small className="text-muted d-block">Selamat Datang,</small>
            <span className="fw-semibold">Admin Toko</span>
          </div>
          <img
            src="https://via.placeholder.com/40"
            className="rounded-circle border"
            alt="Admin Avatar"
          />
        </div>
      </div>
    </nav>
  );
}
