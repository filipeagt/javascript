import React from 'react'
import './css/Navbar.css'   //Imnportar css desse componente
import logo from '../assets/airbnb.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="nav-topo">
                <div className="container-airbnb">
                    <div className="d-flex align-items-center border border-info col-sm-6">
                        <img src={logo} alt="Logo do site" className="logo" />
                    </div>
                    <div className="d-flex align-items-center justify-content-end border border-info col-sm-6">
                        <a href="#" className='link-especial'>Seja um anfitrião</a>
                        <a href="#" className='icon-nav'><i className='mdi mdi-web'></i></a>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
