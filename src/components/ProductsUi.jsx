import { useState } from 'react';
import './css/productUi.css';

const ProductsUi = () => {
    const [pics, setPics] = useState([
        { src: 'https://images-na.ssl-images-amazon.com/images/I/31DNFLX-5FL.jpg' },
        { src: 'https://images-na.ssl-images-amazon.com/images/I/21armwyupbL.jpg'},
        { src: 'https://images-na.ssl-images-amazon.com/images/I/21e0zJukTBL.jpg'},
        { src: 'https://images-na.ssl-images-amazon.com/images/I/21BrHvAylSL.jpg'},
        { src: 'https://images-na.ssl-images-amazon.com/images/I/11M6F9eAc4L.jpg'},
        { src: 'https://images-na.ssl-images-amazon.com/images/I/11XZ22EG9QL.jpg'},
        { src: 'https://images-na.ssl-images-amazon.com/images/I/41w62fQzA%2BL.jpg' }
    ]);

    return ( 
        <div className="product-pics">
            <div className="select-pics">
                {pics.map(pic => (
                    <img src={pic.src} alt='pic' className='tiny-pic' />
                ))}
            </div>
            <div className="main-pic">
                 <img src="https://images-na.ssl-images-amazon.com/images/I/31DNFLX-5FL.jpg" alt="main-pic" className="main-pic"/>
            </div>
        </div>
    );
}
 
export default ProductsUi;