import React from 'react';
import NavBar from './top-nav';
import './header.css';

export default function Header(props) {
    return (
        <header>
            <NavBar onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
                    onRestartGame={() => props.onRestartGame()} 
            />
            <h1>HOT or COLD</h1>
        </header>
    );
}

