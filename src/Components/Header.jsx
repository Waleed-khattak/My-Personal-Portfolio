import { FaPaperPlane } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <div className="left-nav">
                    <div className="logo">
                        <h1>Waleed <span className="logo-right">Khattak</span></h1>
                    </div>

                    <div className="hamburger-menu">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>

                    <div className={`list ${isOpen ? 'show' : ''}`}>
                        <ul>
                            <li><a className="list-item" href="#home" onClick={() => setOpen(false)}>Home</a></li>
                            <li><a className="list-item" href="#about" onClick={() => setOpen(false)}>About</a></li>
                            <li><a className="list-item" href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
                            <li><a className="list-item" href="#hobbies" onClick={() => setOpen(false)}>Hobbies</a></li>
                            <li><a className="list-item" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className={`right-nav hire-me ${isOpen ? 'show' : ''}`}>
                    <button className="hire-me-btn" onClick={() => setOpen(false)}>
                        <a href="#contact">
                            Hire Me <span className="hire-me-btn-icon-right"><FaPaperPlane /></span>
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
