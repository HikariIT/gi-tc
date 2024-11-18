'use client';

import Link from 'next/link';
import '../styles/layout/_header.sass';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";


export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
      <header id="gi-header">
        <div id="gi-header__title-with-button">
          <div id="gi-header__title">
            <h1>Genshin Stove</h1>
            <span>What are you cooking today?</span>
          </div>
          <button id="gi-header__button" onClick={handleClick} type={"button"}><FaBars size={20}/></button>
        </div>
        <nav id="gi-nav">
            <ul style={{ display: isOpen ? "flex" : "none"}} id="gi-nav__list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/characters">Characters</Link></li>
                <li><Link href="/builds">Builds</Link></li>
                <li><Link href="/rotations">Rotations</Link></li>
                <li><Link href="/artifacts">Artifacts</Link></li>
                <li><Link href="/database">Database</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
      </header>
    );
  }

