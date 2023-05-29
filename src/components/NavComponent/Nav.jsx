import React, { useState } from 'react';
import { Header, NavWrapper, Navigation } from './Nav.styles';
import Hamburger from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar'
import ThemeChange from './ThemeChange'

function Nav() {
  const navigation = React.useMemo(
    () => [
      { name: 'Início', href: '/' },
      { name: 'Sobre', href: '/about' },
      { name: 'Contato', href: '/contact' },
      { name: 'Skills', href: '/skills' },
      { name: 'Setup', href: '/setup' },
    ],
    []
  );
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const closeOnClickNav = () => {
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Header>
      <NavWrapper isopen={isOpen}>
        <ThemeChange />

        <div
          className="hamburger"
          aria-expanded={isOpen}
          role="button"
          tabIndex="0"
          style={{ cursor: 'pointer', height: '48px', position: 'relative' }}
          title={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Hamburger
            size={26}
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          />
        </div>

        <Navigation>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                aria-label={`Link para a página ${item.name}`}
                title={`Link para a página ${item.name}`}
                onClick={closeOnClickNav}
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <p
                  aria-label={item.name}
                  onClick={scrollToTop}
                  style={{
                    display: 'inline-block',
                    borderBottom:
                      location.pathname === item.href
                        ? '1px solid var(--special-color)'
                        : 'none',
                  }}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </Navigation>

        <SearchBar />
      </NavWrapper>
    </Header>
  );
}

export default Nav;
