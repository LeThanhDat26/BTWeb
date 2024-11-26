import React from 'react';
import'./maincontent.css';
function MainContent() {
const article = {
title: 'The Beauty of Web Design',
image: 'baitap/public/Acer_Wallpaper_03_3840x2400.jpg',
content: 'Web design is more than just creating beautiful websites. Its about creating user-friendly, accessible, and functional designs that people can interact with easily. In this article, we explore some of the best practices and principles of modern web design.',
author: 'John Doe',
date: 'October 8, 2024',
};
return (
<main className="main-content">
 <div className="article">
<h1>{article.title}</h1>
<img src={article.image} alt="Web Design" /> 
 <p className="content">{article.content}</p>
<div className="article-meta">
 <p>Written by: {article.author}</p>
 </div>
<p>Date: {article.date}</p>
 </div>
 </main>
);
}
export default MainContent;