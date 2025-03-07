import config from '../../api/schema.json';
import './style.scss';
const LocationComponents = () => {
    const {contact_us} = config.schema;
    return (
        <section className="location">
            <iframe src={contact_us.frame}  
            title='map'
             style={{border:0}}   loading="lazy"></iframe>
           

        </section>
    );
}
export default LocationComponents;