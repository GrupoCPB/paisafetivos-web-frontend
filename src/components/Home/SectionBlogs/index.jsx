import React from "react";
import { Blog } from "../../../style/blog";
import flecha2 from "../../../assets/flecha-branca-direita.png";

function SectionBlog() {
  return (
    <>
      <Blog>
        <h2>Acompanhe nosso blog</h2>
        <div className="blog-notice-area">
          <div className="notice notice-photo-1">
            <div className="notice--info">
              Notícias da semana, notícias da semana
            </div>
          </div>
          <div className="notice notice-photo-2">
            <div className="notice--info">
              Notícias da semana, notícias da semana
            </div>
          </div>
          <div className="notice notice-photo-3">
            <div className="notice--info">
              Notícias da semana, notícias da semana
            </div>
          </div>
          <div className="notice notice-photo-4">
            <div className="notice--info">
              Notícias da semana, notícias da semana
            </div>
          </div>
        </div>
        <div className="blog">
          <a href="/">
            Acesse o Blog <img src={flecha2} alt="icone de flecha" />{" "}
          </a>
        </div>
      </Blog>
    </>
  );
}

export default SectionBlog;
