import React from "react";
import Navigation from "../../../component/navigation";
import Footer from "../../../component/footer";

const Jenjangonl23 = () => {
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
                  <li>Jenjang Event Online</li>
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
          Pilih berdasarkan Jenjang event Online yang Anda ikuti
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2 "
              href="https://drive.google.com/file/d/1OCDKSvVSfvsnD_uECkKpVAol97PEYTSY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Universitas
            </a>
            <a
              className="btn m-2 "
              href="https://drive.google.com/file/d/1tDBY7CI-xsG0AdcRbk-CN0LCpHoi8qvM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Sekolah Menengah Atas (SMA)
            </a>
            <a
              className="btn m-2 "
              href="https://drive.google.com/file/d/1uHoH3tISNFo8DNSnyFGmd9OU5N3xSg76/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Sekolah Menengah Pertama (SMP)
            </a>
            <a
              className="btn m-2 "
              href="https://drive.google.com/file/d/1jtCalSTvLF07_E5d9j0vDK7vxuXodgcc/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Sekolah Dasar (SD)
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangonl23;
