import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Vrushal.dev</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
