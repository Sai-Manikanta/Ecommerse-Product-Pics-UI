import { useState } from 'react';
import './css/productUi.css';

const ProductsUi = () => {
    const [pics, setPics] = useState([
        { id: 1, src: 'https://images-na.ssl-images-amazon.com/images/I/31DNFLX-5FL.jpg', alt:'a' },
        { id: 2, src: 'https://images-na.ssl-images-amazon.com/images/I/21armwyupbL.jpg', alt:'b' },
        { id: 3, src: 'https://images-na.ssl-images-amazon.com/images/I/21e0zJukTBL.jpg', alt:'c' },
        { id: 4, src: 'https://images-na.ssl-images-amazon.com/images/I/21BrHvAylSL.jpg', alt:'d' },
        { id: 5, src: 'https://images-na.ssl-images-amazon.com/images/I/11M6F9eAc4L.jpg', alt:'e' },
        { id: 6, src: 'https://images-na.ssl-images-amazon.com/images/I/11XZ22EG9QL.jpg', alt:'f' },
        { id: 7, src: 'https://images-na.ssl-images-amazon.com/images/I/41w62fQzA%2BL.jpg', alt:'g' }
    ]);

    const [mainPic, setMainPic] = useState(pics[0]);

    return ( 
        <div className="product-pics">
            <div className="select-pics">
                {pics.map((pic) => (
                    <img key={pic.id} src={pic.src} alt={pic.alt} className='tiny-pic' onClick={() => setMainPic(pic)} />
                ))}
            </div>
            <div className="main-pic">
                 <img src={mainPic.src} alt={mainPic.alt} className="main-pic"/>
            </div>
        </div>
    );
}
 
export default ProductsUi;