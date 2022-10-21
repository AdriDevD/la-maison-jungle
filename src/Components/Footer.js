import { useState } from "react";
import "../Styles/Footer.css";

function Footer() {
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Mail invalide");
    }
  }
  const [inputValue, setInputValue] = useState("");
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
