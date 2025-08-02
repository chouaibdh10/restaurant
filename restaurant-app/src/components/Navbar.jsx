"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <span style={styles.logoEmoji}>🍽️</span>
          </div>
          <span style={styles.logoText}>Foodie</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          <Link to="/" style={isActive("/") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            Home
          </Link>
          <Link to="/menu" style={isActive("/menu") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            Our Menu
          </Link>
          <Link to="/foods" style={isActive("/foods") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            Foods
          </Link>
          <Link to="/cart" style={isActive("/cart") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            🛒 Cart
          </Link>
          <Link to="/about" style={isActive("/about") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            About us
          </Link>
          <Link
            to="/contact"
            style={isActive("/contact") ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Contact us
          </Link>
        </div>

        {/* Login Button & Mobile Menu Button */}
        <div style={styles.rightSection}>
          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} style={styles.mobileMenuButton}>
            <div style={styles.hamburgerIcon}>
              <span style={styles.hamburgerLine}></span>
              <span style={styles.hamburgerLine}></span>
              <span style={styles.hamburgerLine}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <Link
            to="/"
            onClick={toggleMobileMenu}
            style={isActive("/") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={toggleMobileMenu}
            style={isActive("/menu") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            Our Menu
          </Link>
          <Link
            to="/foods"
            onClick={toggleMobileMenu}
            style={isActive("/foods") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            Foods
          </Link>
          <Link
            to="/cart"
            onClick={toggleMobileMenu}
            style={isActive("/cart") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            🛒 Cart
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            style={isActive("/about") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            About us
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            style={isActive("/contact") ? { ...styles.mobileLink, ...styles.activeMobileLink } : styles.mobileLink}
          >
            Contact us
          </Link>
          <Link to="/login" onClick={toggleMobileMenu} style={styles.mobileLoginButton}>
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

const styles = {
  navbar: {
    backgroundColor: "#fef7f0",
    borderBottom: "1px solid #f0f0f0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    height: "64px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    gap: "0.5rem",
  },
  logoIcon: {
    width: "32px",
    height: "32px",
    backgroundColor: "#ff4444",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoEmoji: {
    color: "white",
    fontSize: "18px",
  },
  logoText: {
    color: "#ff4444",
    fontSize: "20px",
    fontWeight: "bold",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  navLink: {
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    padding: "0.5rem 0",
    transition: "all 0.3s ease",
    borderBottom: "2px solid transparent",
  },
  activeLink: {
    color: "#ff4444",
    borderBottom: "2px solid #ff4444",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  loginButton: {
    color: "#ff4444",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 24px",
    border: "2px solid #ff4444",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    display: "inline-block",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  mobileMenuButton: {
    display: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  hamburgerIcon: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  hamburgerLine: {
    width: "24px",
    height: "3px",
    backgroundColor: "#6b7280",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTop: "1px solid #f0f0f0",
    padding: "1rem 2rem",
    gap: "0.5rem",
  },
  mobileLink: {
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  activeMobileLink: {
    color: "#ff4444",
    backgroundColor: "#fef2f2",
  },
  mobileLoginButton: {
    color: "#ff4444",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 24px",
    border: "2px solid #ff4444",
    borderRadius: "25px",
    textAlign: "center",
    marginTop: "1rem",
    transition: "all 0.3s ease",
  },
}

// Add hover effects using CSS-in-JS approach
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
  @media (min-width: 769px) {
    .navbar-desktop-nav {
      display: flex !important;
    }
    .navbar-mobile-button {
      display: none !important;
    }
    .navbar-login-button {
      display: inline-block !important;
    }
  }
  @media (max-width: 768px) {
    .navbar-desktop-nav {
      display: none !important;
    }
    .navbar-mobile-button {
      display: flex !important;
    }
    .navbar-login-button {
      display: none !important;
    }
  }
  .navbar-link:hover {
    color: #ff4444 !important;
  }
  .navbar-login-btn:hover {
    background-color: #ff4444 !important;
    color: white !important;
  }
  .navbar-mobile-link:hover {
    color: #ff4444 !important;
    background-color: #f9fafb !important;
  }
`
document.head.appendChild(styleSheet)

export default Navbar
