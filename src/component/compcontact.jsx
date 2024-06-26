
const Compcontact = () => {
    return (
        <>
        {/* <!-- Breadcrumbs Start --> */}
            <div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
                <div class="breadcrumbs-inner">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="page-title">Kontak</h1>
                            <ul>
                            <li>
                                <a class="active" href="/">Utama</a>
                            </li>
                            <li>Kontak</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs End */}

            {/* <!-- Contact Section Start --> */}
            <div class="contact-page-section sec-spacer">
                <div class="container">
                    <div class="row contact-address-section">
                        <div class="col-md-4 pl-0">
                            <div class="contact-info contact-address">
                                <i class="fa fa-map-marker"></i>
                                <h4>Address</h4>
                                <a href="https://maps.app.goo.gl/J4HZU8aZeLwXx7Fx7" target="_blank">Address Jalan Kemang No. 63, RT. 3 RW. 6 Pasir Putih Sawangan, Kota Depok, </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-info contact-phone">
                                <i class="fa fa-phone"></i>
                                <h4>Phone Number</h4>
                                <a href="https://wa.me/081770914129" target="_blank">+62 817-7091-4129</a>
                            </div>
                        </div>
                        <div class="col-md-4 pr-0">
                            <div class="contact-info contact-email">
                                <i class="fa fa-envelope"></i>
                                <h4>Email Address</h4>
                                <a href="mailto:iicmys.iysa@gmail.com">
                                <p>iicmys.iysa@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="contact-comment-section">
                        {/* <div id="form-messages"></div> */}
                        <form method="post" action="https://formspree.io/f/mqazzkqq">
                            <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                <label>First Name*</label>
                                <input name="name" class="form-control" type="text" required />
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                <label>Last Name*</label>
                                <input name="name" class="form-control" type="text" required />
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                <label>Email*</label>
                                <input name="email"class="form-control" type="email" required />
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group">
                                <label>Message *</label>
                                <textarea cols="40" rows="10" name="message" class="textarea form-control" required></textarea>
                                </div>
                            </div>
                            </div>
                            <div class="form-group mb-0">
                            <input class="btn-send" type="submit" value="send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Contact Section End --> */}
        </>
    )
   }
   export default Compcontact