import config from '../../api/schema.json';
import './style.scss';
const BlogComponents = () => {
    const {Blog} = config.schema;
    return (
        <section className="blog">
            <div className='containeer'>
            <h1>{Blog.title}</h1>
            <p>{Blog.subtitle}</p>
            <hr className='mz'></hr>
            <div className='blog__notes'>
                <div className="cards__users" >
                    <img src={Blog.users} alt='img'/>
                    <h1>{Blog.title}</h1>
                    <h3>{Blog.subtitle[0]}</h3>

                </div>

                <div className="cards__users" >
                    <img src={Blog.users} alt='img'/>
                    <h1>{Blog.title}</h1>
                    <h3>{Blog.subtitle[1]}</h3>


                </div>
                <div className="cards__users" >
                    <img src={Blog.users} alt='img'/>
                    <h1>{Blog.title}</h1>
                    <h3>{Blog.subtitle[2]}</h3>
                   

                </div>
                <div className="cards__users" >
                    <img src={Blog.users} alt='img'/>
                    <h1>{Blog.title}</h1>
                    <h3>{Blog.subtitle[2]}</h3>
                   

                </div>
               
               
                <button className='desktop'>{Blog.btn}</button>
                

            </div>
            <button className='hidden'>{Blog.btn}</button>

        </div>

        </section>
    );
}
export default BlogComponents;