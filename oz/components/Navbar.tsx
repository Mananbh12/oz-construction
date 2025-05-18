'use client';

import React, { useState, useEffect } from 'react';
import { FloatingNav } from './ui/floating-navbar';

export function OzNavbar() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Styles synchronisés avec ceux de FloatingNav
  const navStyles = {
    backgroundColor: '#1F2A44', // Même couleur que dans layout.tsx
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    zIndex: 5000,
  } as const;

  // Rendu initial invisible pour éviter le flash
  if (!isClient) {
    return (
      <div style={{ ...navStyles, visibility: 'hidden' }}>
        <nav style={{ display: 'flex', gap: '16px' }}>
          {navItems.map((item) => (
            <a key={item.name} href={item.link} style={{ color: 'white', textDecoration: 'none' }}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    );
  }

  return (
    <div style={navStyles}>
      <FloatingNav navItems={navItems} />
    </div>
  );
}