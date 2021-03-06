import React, { Fragment } from 'react';

const Login = () => {
    return (
        <main>
            <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                        <img src="%PUBLIC_URL%/../assetsD/img/logo.png" alt=""/>
                                        <span className="d-none d-lg-block">Efigas E.S.P</span>
                                    </a>
                                </div>{/* <!-- End Logo --> */}

                                <div className="card mb-3">

                                    <div className="card-body">
                                        
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Inicia Sesión</h5>
                                            <p className="text-center small">Ingresa tu usuario y contraseña para logearte</p>
                                        </div>

                                        <form className="row g-3 needs-validation" noValidate>

                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Usuario</label>
                                                <div className="input-group has-validation">
                                                    {/* <!--<span className="input-group-text" id="inputGroupPrepend">@</span>--> */}
                                                    <input type="text" name="username" className="form-control" id="yourUsername" required/>
                                                    <div className="invalid-feedback">Por favor ingresa tu usuario</div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Contraseña</label>
                                                <input type="password" name="passwword" className="form-control" id="yourPassword" required/>
                                                <div className="invalid-feedback">Por favor ingresa tu contraseña</div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                                    <label className="form-check-label" htmlFor="rememberMe">Recuerdame</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Iniciar sesión</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">¿No tienes una cuenta? <a href="pages-register.html">Registrate</a></p>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    )
}

export default Login;