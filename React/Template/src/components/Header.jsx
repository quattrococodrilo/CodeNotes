import React from "react";
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header>
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://scontent.flov1-1.fna.fbcdn.net/v/t1.0-1/p148x148/95662753_2624214761183033_7726273212018851840_n.jpg?_nc_cat=103&_nc_sid=1eb0c7&_nc_eui2=AeFGYQaJRsnPYRFGgdrmuf4Dgv8m88x9gBaC_ybzzH2AFnuHfTW2QbKj3wlDQlDON7HcsljK0rgpz6S_52OLz9b2&_nc_ohc=EXN8PXRsO6QAX91d69E&_nc_ht=scontent.flov1-1.fna&tp=6&oh=8c9752b14d7453b20be6a91a6705fcde&oe=5FAA04C4" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
                        Kanela Glasé
                </a>
            </div>
        </nav>
    </header>
);

export default Header;
