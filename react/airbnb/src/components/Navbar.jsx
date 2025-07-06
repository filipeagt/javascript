import React from 'react'
import './css/Navbar.css'   //Imnportar css desse componente
import logo from '../assets/airbnb.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="nav-topo">
                <div className="container-airbnb">
                    <div className="d-flex align-items-center col-sm-6">
                        <img src={logo} alt="Logo do site" className="logo" />
                    </div>
                    <div className="d-flex align-items-center justify-content-end col-sm-6">
                        <a href="#" className='link-especial'>Seja um anfitrião</a>
                        <a href="#" className='icon-nav mx-2'><i className='mdi mdi-web'></i></a>
                        <div className="dropdown">
                            <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fs-5 mdi mdi-menu ps-2 me-1"></i>
                                <i className="fs-2 position-relative mdi mdi-account-circle pe-2">
                                    <span class="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                                </i>
                            </a>

                            <ul style={{borderRadius:'15px'}} className="dropdown-menu mt-2 py-3 border-0 shadow">
                                <li><a className="fw-bold dropdown-item p-2 px-3" href="#">Cadastre-se</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma esperiência</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
