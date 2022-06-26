import React, { Component } from 'react'


// rcc
//Emmet => header>nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                            <i className={this.props.icon}></i>
                            </a>
                            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">{this.props.homepage} <span className="visually-hidden">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">{this.props.contact}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">{this.props.aboutme}</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <a className="dropdown-item" href="#">Action 1</a>
                                            <a className="dropdown-item" href="#">Action 2</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}//class ends

//default props
HeaderComponent.defaultProps={
    content:"blog projet",
    icon:"fa-brands fa-slack",
    homepage: "Ana Sayfa",
    aboutme: "Hakkımızda",
    contact: "İletişim",
}