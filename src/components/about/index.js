import "./index.scss";
import config from '../../api/schema.json';

const AboutUs = () => {
    const { about_us } = config.schema;
  
    return (
      <section className="about">
        <div className="about__left">
          <h1>{about_us.text[0]}</h1>
          <h3>{about_us.text[1]}</h3>
          <hr className="mr" />
          <p>{about_us.text[2]}</p>
        </div>

        <div className="about__right">
          <div className="grid-container">
            {about_us.title.slice(0, 4).map((title, index) => (
              <div className="cards" key={index}>
                <h1>{title}</h1>
                <p>{about_us.subtitle[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default AboutUs;
