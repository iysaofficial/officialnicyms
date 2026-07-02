import React from "react";
import Navigation from "../component/navigation";
import Footer from "../component/footer";

const Sertifikat = () => {
  return (
    <>
      <Navigation />
      {/* <!-- Breadcrumbs Start --> */}
      <div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
        <div class="breadcrumbs-inner">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="page-title">Sertifikat</h1>
                <ul>
                  <li>
                    <a class="active" href="/">
                      Utama
                    </a>
                  </li>
                  <li>Sertifikat Supervisor</li>
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
              href="https://drive.google.com/drive/folders/1DHgUjrslNpCQPfNXmF7LzsCef5SaWS3b?usp=sharing"
            >
              2026 Offline
            </a>
            <a
              className="btn m-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1dJupLRyJ63JoiDikgasmTuG4NeGUCRPv?usp=sharing"
            >
              2026 Online
            </a>
            <a
              className="btn m-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/12691ID90CNE1PhKIRYnXAVU_7gCaN8jZ?usp=sharing"
            >
              Sertifikat Supervisor 2025
            </a>
            <a
              className="btn m-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1rcsBXk-DdMCkWPqcktXhOam6JzXrquI3?usp=drive_link"
            >
              Sertifikat Supervisor 2024
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sertifikat;
