import React from "react";
import "./hero.css";

export default function hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="avatar">
          <img src="./Amr.jpg" alt="" />
          <i className="fa-solid fa-circle-check check-icon"></i>
        </div>
        <h1>Front End Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea
          molestias iste pariatur velit natus. Iusto natus voluptas accusantium!
          Asperiores cupiditate officia est nam voluptates aliquid dolor.
        </p>
        <div className="icons">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="right-section border">right</div>
    </section>
  );
}
