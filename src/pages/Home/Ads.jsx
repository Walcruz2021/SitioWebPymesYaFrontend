import "./Ads.css";
import instagram from "../Home/imagenes/instagram.png";
const Ads = () => {
  return (
    <div className="containerAds">
      <h3>Snea Salta</h3>
      <h1>SNEAKERS</h1>
      <div className="containerAds2">
        <img className="iconoInstagram" src={instagram} />
        <h3>@sneaSalta</h3>
      </div>
    </div>
  );
};

export default Ads;
