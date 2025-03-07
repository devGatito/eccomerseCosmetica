import "./index.scss";
import config from "../../api/schema.json";

const FooterComponent = () => {
  const { navbar } = config.schema;

  return (
    <section className="footer">
        <div className="footer__wrapper">
      <img className="footer__logo" src={navbar.logo} alt="logo" />
      <div className="footer__grid">
        <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>
            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>

            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>

            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>
        </div>

        
       
      <hr className="mw"></hr>
      <div className="footer__grid" style={{marginTop:"22px"}}>
        <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>
            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>

            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>

            <div>
            <h3 className="footer__grid__item__title">About Us</h3>
            <p className="footer__grid__item__text">
                {navbar.aboutUs}
            </p>
            </div>
        </div>

      </div>
      
    </section>
  );
};

export default FooterComponent;
