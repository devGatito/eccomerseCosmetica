import { useEffect, useState } from "react";
import config from "../../api/schema.json";
import "./index.scss";

const BannerComponent = () => {
  const { banner } = config.schema;
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="banner">
      <img
        className="banner__img"
        src={banner.img}
        alt="img"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className="banner__content">
        <div className="banner__left">
          <h1 className="banner__title">{banner.title}</h1>
          <p className="banner__description">{banner.description}</p>
        </div>
        <div className="banner__right">
          <button className="banner__btn">{banner.btn}</button>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
