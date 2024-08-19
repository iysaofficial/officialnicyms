import "../assets/css/styles.css";

function Navigation() {
  return (
    <>
      <section className="nav-section" id="Navbar">
        {/* Header Start */}
        <div class="full-width-header">
          {/* <!-- Toolbar Start --> */}
          <div class="rs-toolbar">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="rs-toolbar-left">
                    <div class="welcome-message">
                      <i class="fa fa-home"></i>
                      <span>Selamat Datang di NICYMS</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="rs-toolbar-right">
                    <div class="toolbar-share-icon2">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/people/Iicyms-Iysa/pfbid02kDFtrArHewkZr3br2f5Br6Qjz3w2Q3MgQmpgVx1ptZ3bhioe16SNALPreUbHwQ8gl/">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw?reload=9&app=desktop">
                            <i class="fa fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/iicyms_official/?hl=en">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header id="rs-header" className="rs-header">
            {/* Header Top Start */}
            <div className="rs-header-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="logo-area">
                      <a>
                        <img src="./assets/logo/nicyms2.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="header-contact">
                          <div id="phone-details" className="widget-text2">
                            <i className="glyph-icon flaticon-phone-call"></i>
                            <div className="info-text">
                              <a href="tel:+6281770914129">
                                <span>Telepon</span>
                                +62 817-7091-4129
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="header-contact">
                          <div id="info-details" className="widget-text2">
                            <i className="glyph-icon flaticon-email"></i>
                            <div className="info-text">
                              <a href="mailto:iicmys.iysa@gmail.com">
                                <span>Email</span>
                                iicmys.iysa@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="header-contact">
                          <div id="address-details" className="widget-text2">
                            <i className="glyph-icon flaticon-placeholder"></i>
                            <div className="info-text">
                              <a href="https://goo.gl/maps/9x18coXGCmSscKec6">
                                <span>Lokasi</span>
                                Pasir Putih Sawangan, Kota Depok
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Header Top End */}
            {/* <!-- Menu Start --> */}
            <section className="navigation">
              <div className="nav-bottom fontStyle2">
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#bottomNavbar"
                  className="btn w-100 d-lg-none d-md-none d-sm-block d-xs-block rounded-0 p-2"
                >
                  <i className="fas fa-bars me-2"></i> Menu
                </button>
                <div
                  className="collapse navbar-collapse px-2"
                  id="bottomNavbar"
                >
                  <div className="container-fluid">
                    <div
                      className="d-flex justify-content-between align-items-center"
                      id="removeFlex"
                    >
                      <div className="flex-grow-1">
                        <a href="/" className="d-inline-block customNav">
                          Utama
                        </a>
                        <a
                          href="/lowtahun"
                          className="d-inline-block customNav"
                        >
                          Daftar Pemenang
                        </a>
                        <a className="dropdown d-inline-block">
                          <button
                            className="btn btn-secondary dropdown-toggle customNav"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Liputan Media
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="/listnews">
                              Berita
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://drive.google.com/file/d/1M_Aej44_CZefC9WFj_3HhMbF2OZbratg/view?usp=sharing"
                              target="_blank"
                            >
                              Press Release 2024
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://drive.google.com/file/d/19W7ElTUGjFTynbnTWBrbLmNIqJzxbd6D/view"
                              target="_blank"
                            >
                              Press Release 2023
                            </a>
                          </div>
                        </a>
                        <a className="dropdown d-inline-block">
                          <button
                            className="btn btn-secondary dropdown-toggle customNav"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Kurasi
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              2023
                            </a>
                            <a className="dropdown-item" href="#">
                              2022
                            </a>
                          </div>
                        </a>
                        <a className="dropdown d-inline-block">
                          <button
                            className="btn btn-secondary dropdown-toggle customNav"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Galeri
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a
                              className="dropdown-item"
                              href="https://drive.google.com/drive/folders/1xR5soI5qsjzG0mp-PXrIiJlgMxZjUmUD?usp=sharing"
                              target="_blank"
                            >
                              2024
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://drive.google.com/drive/folders/1gkgBzI83lfkfYHZ6GoH2rtZch8YafQKw"
                              target="_blank"
                            >
                              2023
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://drive.google.com/drive/folders/1tbleqGcl_Fsx1HiT1aM5tLcwgOIAkoO1"
                              target="_blank"
                            >
                              2022
                            </a>
                          </div>
                        </a>
                        <a href="/faq" className="d-inline-block customNav">
                          FAQ
                        </a>
                        <a className="dropdown d-inline-block">
                          <button
                            className="btn btn-secondary dropdown-toggle customNav"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Sertifikat
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a
                              className="dropdown-item"
                              target="_blank"
                              href="https://drive.google.com/drive/folders/1rcsBXk-DdMCkWPqcktXhOam6JzXrquI3?usp=drive_link"
                            >
                              Sertifikat Supervisor 2024
                            </a>
                            {/* <a className="dropdown-item" href="#">Sertifikat Supervisor 2023</a> */}
                          </div>
                        </a>
                        <a href="/contact" className="d-inline-block customNav">
                          Kontak
                        </a>
                      </div>
                      {/* <div className="m-3">
                                    <i className="fas fa-search text-white fs-6"></i>
                                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Menu End */}
          </header>
          {/* <Header End */}
        </div>
      </section>
    </>
  );
}

export default Navigation;
