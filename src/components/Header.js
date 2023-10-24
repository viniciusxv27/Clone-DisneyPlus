/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disney_Plus_logo.svg/589px-Disney_Plus_logo.svg.png" alt="logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Raya-Avatar-Disney-Plus.png" alt="imagem de usuario"/>
                </a>
            </div>
        </header>
    )
}