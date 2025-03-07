import { Link } from "react-router-dom";
import config from "../../api/schema.json";
import "./style.scss";
const HeroComponent = () => {
  const { hero } = config.schema;
  return (
    <section className="hero">
      <img className="hero__main" alt="hero__main" src={hero.img} />
      <div className="hero__content">
        <h1>{hero.text[0]}</h1>

        <div>
          <hr className="ma"></hr>

          <p>{hero.text[1]}</p>

          <Link to="/">
            <button>{hero.text[2]}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroComponent;
 