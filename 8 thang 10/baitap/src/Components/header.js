
import React from 'react';
import'./header.css';
const Header = () => {
return (
<header className="header">
<div className="video-background">
<video autoPlay muted loop>
<source src="video/y2mate.com - Đ Ư A  C H U Ố I  Đ Â Y _720pHFR.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>
</div>
<div className="overlay">
<div className="content">
<div className="logo">
<a href="/">MyBrand</a>
</div>
<nav className="nav">
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
<div className="cta">
<a href="#signup" className="btn">Sign Up</a>
</div>
</div>
</div>
</header>
);
};
export default Header;