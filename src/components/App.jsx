import React, { Fragment } from 'react';

const App = () => {
    return (
        <div>
                                
            {/* <!-- ======= Header ======= --> */}
            <header >

            </header>{/* <!-- End Header --> */}

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <div className="text-center text-lg-start">
                        <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                            <span>Get Started</span>
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                    <img src="%PUBLIC_URL%/../assetsH/img/hero-img.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                </div>

            </section>{/* <!-- End Hero --> */}

            <main id="main">
                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">

                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                        <h3>Who We Are</h3>
                        <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                        <p>
                            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                        </p>
                        <div className="text-center text-lg-start">
                            <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                            <span>Read More</span>
                            <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src="%PUBLIC_URL%/../assetsH/img/about.jpg" className="img-fluid" alt=""/>
                    </div>

                    </div>
                </div>

                </section>{/* <!-- End About Section --> */}

                {/* <!-- ======= Services Section ======= --> */}
                <section id="services" className="services">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                    <h2>Services</h2>
                    <p>Veritatis et dolores facere numquam et praesentium</p>
                    </header>

                    <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-box blue">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Nesciunt Mete</h3>
                        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-box orange">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Eosle Commodi</h3>
                        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-box green">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Ledo Markt</h3>
                        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-box red">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Asperiores Commodi</h3>
                        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-box purple">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Velit Doloremque.</h3>
                        <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                        <div className="service-box pink">
                        <i className="ri-discuss-line icon"></i>
                        <h3>Dolori Architecto</h3>
                        <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                        <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    </div>

                </div>

                </section>{/* <!-- End Services Section --> */}

                {/* <!-- ======= F.A.Q Section ======= --> */}
                <section id="faq" className="faq">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                    </header>

                    <div className="row">
                    <div className="col-lg-6">
                        {/* <!-- F.A.Q List 1--> */}
                        <div className="accordion accordion-flush" id="faqlist1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                Non consectetur a erat nam at lectus urna duis?
                            </button>
                            </h2>
                            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                            <div className="accordion-body">
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                            </button>
                            </h2>
                            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                            <div className="accordion-body">
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                            </button>
                            </h2>
                            <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                            <div className="accordion-body">
                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>

                    <div className="col-lg-6">

                        {/* <!-- F.A.Q List 2--> */}
                        <div className="accordion accordion-flush" id="faqlist2">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                            </button>
                            </h2>
                            <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                            <div className="accordion-body">
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                                Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                            </button>
                            </h2>
                            <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                            <div className="accordion-body">
                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                                Varius vel pharetra vel turpis nunc eget lorem dolor?
                            </button>
                            </h2>
                            <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                            <div className="accordion-body">
                                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>

                    </div>

                </div>

                </section>{/* <!-- End F.A.Q Section --> */}

            </main>{/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer" className="footer">

                <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                        <img src="%PUBLIC_URL%/../assetsH/img/logo.png" alt=""/>
                        <span>FlexStart</span>
                        </a>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                        A108 Adam Street <br/> 
                        New York, NY 535022 <br/>
                        United States <br/>
                        <strong>Phone:</strong> +1 5589 55488 55 <br/>
                        <strong>Email:</strong> info@example.com <br/>
                        </p>

                    </div>

                    </div>
                </div>
                </div>

                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* <!-- All the links in the footer should remain intact. --> */}
                    {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                    {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                    {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ --> */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
                </div>
            </footer>{/* <!-- End Footer --> */}

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            
        </div>
    );
}

export default App;