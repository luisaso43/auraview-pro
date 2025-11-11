class AuraNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .logo-icon {
          color: #6366f1;
          margin-right: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: #4b5563;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #6366f1;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .cart-icon, .user-icon {
          color: #4b5563;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .cart-icon:hover, .user-icon:hover {
          color: #6366f1;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links, .nav-actions {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <div class="navbar-container">
        <a href="/" class="logo">
          <i data-feather="film" class="logo-icon"></i>
          AuraView Pro
        </a>
        
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/products" class="nav-link">Products</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        
        <div class="nav-actions">
          <a href="/search" class="nav-link">
            <i data-feather="search" class="w-5 h-5"></i>
          </a>
          <a href="/cart" class="nav-link">
            <i data-feather="shopping-cart" class="w-5 h-5"></i>
          </a>
          <a href="/account" class="nav-link">
            <i
