import React, { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Laptop Gaming Pro",
      kategori: "Elektronik",
      harga: 15000000,
      diskon: 10,
      stok: 8,
    },
    {
      id: 2,
      nama: "Kaos Polos Cotton 30s",
      kategori: "Pakaian",
      harga: 55000,
      diskon: 0,
      stok: 45,
    },
    {
      id: 3,
      nama: "Kopi Arabika 250g",
      kategori: "Makanan",
      harga: 85000,
      diskon: 5,
      stok: 3,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    $(".fade-in-content").fadeIn(600);
  }, []);

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...productData,
                id: p.id,
                harga: Number(productData.harga),
                stok: Number(productData.stok),
                diskon: Number(productData.diskon),
              }
            : p,
        ),
      );
    } else {
      const newProduct = {
        ...productData,
        id: Date.now(),
        harga: Number(productData.harga),
        stok: Number(productData.stok),
        diskon: Number(productData.diskon),
      };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.nama.toLowerCase().includes(search.toLowerCase()) ||
      p.kategori.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper" className="w-100">
        <Navbar />
        <div className="container-fluid p-4 fade-in-content">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Manajemen Produk</h2>
              <p className="text-muted">
                Kelola katalog produk toko online Anda di sini.
              </p>
            </div>
            <button
              className="btn btn-primary shadow-sm"
              onClick={() => {
                setEditingProduct(null);
                setShowModal(true);
              }}
            >
              <i className="bi bi-plus-lg me-1"></i> Tambah Produk Baru
            </button>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-primary border-4 p-3">
                <div className="text-muted small">Total Jenis Produk</div>
                <div className="fs-4 fw-bold">{products.length}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-warning border-4 p-3">
                <div className="text-muted small">Stok Menipis (&lt; 5)</div>
                <div className="fs-4 fw-bold text-warning">
                  {products.filter((p) => p.stok < 5).length}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4 p-3">
                <div className="text-muted small">Total Item Stok</div>
                <div className="fs-4 fw-bold text-success">
                  {products.reduce((acc, curr) => acc + curr.stok, 0)}
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm p-3">
            <div className="row mb-3">
              <div className="col-md-4 ms-auto">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari produk atau kategori..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <ProductTable
              products={filteredProducts}
              onEdit={(prod) => {
                setEditingProduct(prod);
                setShowModal(true);
              }}
              onDelete={handleDeleteProduct}
            />
          </div>
        </div>
      </div>

      <ProductModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingProduct(null);
        }}
        onSave={handleSaveProduct}
        currentProduct={editingProduct}
      />
    </div>
  );
}
