import React from "react";
import Navigation from "../../../component/navigation";
import Footer from "../../../component/footer";

const Jenjangofl23 = () => {
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
                  <li>Jenjang Event Offline</li>
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
            Pilih berdasarkan Jenjang event Offline yang Anda ikuti
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2 sl-readmore-btn2"
              href="https://drive.google.com/file/d/1yf3OOgOG0XrSyUqbGNnv4Qh17artmrcJ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Universitas
            </a>
            <a
              className="btn m-2 sl-readmore-btn2"
              href="https://drive.google.com/file/d/1A5UV3yoe_iiHu0vdfi4cstu1PFT-eoWK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Sekolah Menangah Atas (SMA)
            </a>
            <a
              className="btn m-2 sl-readmore-btn2"
              href="https://drive.google.com/file/d/1ee8ZmHibHzYdyWA21mtVCajPedqJKRwt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Sekolah Menengah Pertama (SMP)
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangofl23;
