import { useEffect, useState } from "react";
import "./header.css";

export default function header() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="flex">
      <button
        className="menu"
        onClick={() => {
          setShowPopup(true);
        }}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button>
        <i className="fa-solid fa-moon"></i>
      </button>

      {showPopup && (
        <div className="fixed">
          <ul className="module">
            <button className="close">
              <i
                onClick={() => {
                  setShowPopup(false);
                }}
                className="fa-solid fa-xmark close"></i>
            </button>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
