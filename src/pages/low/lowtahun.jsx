import React from "react";
import Navigation from "../../component/navigation";
import Footer from "../../component/footer";

const Lowtahun = () => {
  return (
    <>
      <Navigation />
      {/* <!-- Breadcrumbs Start --> */}
      <div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
        <div class="breadcrumbs-inner">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="page-title">Daftar Pemenang</h1>
                <ul>
                  <li>
                    <a class="active" href="/">
                      Utama
                    </a>
                  </li>
                  <li>Tahun Event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <section className="faq-section">
        <div className="container">
          <h1>Pilih berdasarkan tahun acara yang Anda ikuti</h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1k4CFiCcs8sTe4IV0czG0MWA694KNte_f/view?usp=drive_link"
            >
              2024
            </a>
            <a className="btn m-2" href="/kategori23">
              2023
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1EjH734KaA3JyB7BYHqqjme6FjDq8SmaM/view"
              target="_blank"
              rel="noreferrer"
            >
              2022
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Lowtahun;
