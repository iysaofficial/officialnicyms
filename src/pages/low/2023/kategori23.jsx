import React from "react";
import Navigation from "../../../component/navigation";
import Footer from "../../../component/footer";

const Kategori23 = () => {
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
                  <li>Kategori Event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <section className="faq-section">
        <div className="container text-center">
          <h1>
          Pilih kategori daftar pemenang yang ingin kalian lihat
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/13vIOT3SRmEuC6MjXaRu-BPlDYCHkff8I/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              SPECIAL AWARD OFFLINE
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1WSPjO3NmgOi4X4_BWf_ikkGxd0euYT-t/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              SPECIAL AWARD ONLINE
            </a>
            <a className="btn m-2" href="/jenjangofl23">
              NICYMS OFFLINE
            </a>
            <a className="btn m-2" href="/jenjangonl23">
              NICYMS ONLINE
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kategori23;
