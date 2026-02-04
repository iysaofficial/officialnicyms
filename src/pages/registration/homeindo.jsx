import Navigation from "../../component/navigation";
import Footer from "../../component/footer";
import "../../assets/css/Registration.css"
import { indonesiaOfflineTerms, indonesiaOnlineTerms } from "../data/termscopy";
import { useState, useEffect } from "react";

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");
  const [hasViewedTerms, setHasViewedTerms] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setTermsAccepted(false); // Reset state persetujuan
    setHasViewedTerms(false); // Reset state sudah melihat
    setShowModal(true); // Tampilkan modal
  };

  const handleViewTerms = () => {
    window.open("https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing", "_blank");
    setHasViewedTerms(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                FORMULIR REGISTRASI UNTUK PESERTA INDONESIA
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Kompetisi untuk Registrasi NICYMS 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              className="btn btn-regist btn-action text-center me-lg-5 "
              onClick={() => handleOpenModal("indoonline", indonesiaOnlineTerms)}
            >
              Kompetisi Online{" "}<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              className="btn btn-regist btn-action text-center me-lg-5 "
              onClick={() => handleOpenModal("indooffline", indonesiaOfflineTerms)}
            >
              Kompetisi Offline{" "}<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Syarat & Ketentuan</h2>
              <button onClick={() => setShowModal(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-body">
              {termsContent}
              <p>
                Harap baca Syarat & Ketentuan dengan seksama sebelum melanjutkan.
              </p>
            </div>
            <div className="modal-footer">
              <div className="terms-agreement">
                <div
                  className="checkbox-wrapper"
                  onMouseEnter={() => !hasViewedTerms && setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => !hasViewedTerms && setShowTooltip(!showTooltip)}
                >
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    disabled={!hasViewedTerms}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  {showTooltip && (
                    <div className="custom-tooltip">
                      Harap lihat tautan Syarat & Ketentuan terlebih dahulu
                    </div>
                  )}
                </div>
                <label htmlFor="terms">
                  Saya telah membaca dan menyetujui{" "}
                  <a className="terms-link" href="#" onClick={(e) => { e.preventDefault(); handleViewTerms(); }}>
                    Syarat & Ketentuan
                  </a>.
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Kembali
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleAccept}
                  disabled={!termsAccepted}
                >
                  Terima & Lanjutkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;
