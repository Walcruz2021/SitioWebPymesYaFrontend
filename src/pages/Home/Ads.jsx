import "./Ads.css";
import instagram from "../Home/imagenes/instagram.png";
const Ads = () => {
  return (
    <div className="containerAds">
      <h3>Snea Salta</h3>
      <h1>SNEAKERS</h1>
      <a
        className="containerAds2"
        href="https://www.instagram.com/sneaSalta"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img className="iconoInstagram" src={instagram} alt="Instagram" />
        <h3>@sneaSalta</h3>
      </a>
    </div>
  );
};

export default Ads;
