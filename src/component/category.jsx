const Category = () => {
  return (
    <>
      <section>
        <div
          id="rs-courses-categories"
          className="rs-courses-categories pt-100 pb-70"
        >
          <div className="container">
            <div className="sec-title-2 mb-50 after-style">
              <h2>
                <span className="orange-color " />
                Kategori
              </h2>
              <div className="view-more">
                {/* <!-- <a href="#">View All Courses <i className="fa fa-angle-double-right"></i></a> --> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="courses-item2">
                  <i class="fa-solid fa-flask fa-6x"></i>
                  <h4 className="courses-title">
                    <a>Pure Science</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="courses-item2">
                  <i class="fa-solid fa-people-arrows fa-6x"></i>
                  <h4 className="courses-title">
                    <a>
                      Social Science
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="courses-item2">
                  <i class="fa-solid fa-book-open-reader fa-6x"></i>
                  <h4 className="courses-title">
                    <a>
                      Education
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="courses-item2">
                  <i class="fa-solid fa-book-quran fa-6x"></i>
                  <h4 className="courses-title">
                    <a>Science In Islam</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="courses-item2">
                  <i class="fa-solid fa-microscope fa-6x"></i>
                  <h4 className="courses-title">
                    <a>
                      Applied Life Science
                      <br />
                      <br />
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
