import React from 'react';
import {Link, NavLink} from "react-router-dom";
import ThemeTogglerButton from './ThemeToggler';
import {ThemeContext} from './ThemeContext';


function Nav() {

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <nav className="navbar navbar-expand-md navbar-light"
                     style={{backgroundColor: theme.navBackground, color: theme.color}}>
                    <Link className="navbar-brand" to="/">Online Games</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Accueil</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Games</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink"
                                      role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Catégorie
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                    <NavLink className="dropdown-item" to="/category/1">Aventure</NavLink>
                                    <Link className="dropdown-item" to="/category/2">Action</Link>
                                    <Link className="dropdown-item" to="/category/3">Bac à sable</Link>
                                    <Link className="dropdown-item" to="/category/4">Battle royale</Link>
                                    <Link className="dropdown-item" to="/category/5">Construction</Link>
                                    <Link className="dropdown-item" to="/category/6">Course</Link>
                                    <Link className="dropdown-item" to="/category/7">Hack'n'slash</Link>
                                    <Link className="dropdown-item" to="/category/8">Jeu de rôle</Link>
                                    <Link className="dropdown-item" to="/category/9">Plates-formes</Link>
                                    <Link className="dropdown-item" to="/category/10">RPG</Link>
                                    <Link className="dropdown-item" to="/category/11">Sport</Link>

                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/newgame">Nouveau Jeu</Link>
                            </li>
                        </ul>
                        <div className="ml-5">
                            <ThemeTogglerButton/>
                        </div>
                    </div>
                </nav>
            )}
        </ThemeContext.Consumer>

    )

}


export default Nav