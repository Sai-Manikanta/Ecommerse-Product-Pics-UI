import { useState } from 'react';
import './css/productUi.css';

const ProductsUi = () => {
    const [pics, setPics] = useState([
        { id: 1, src: 'https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/y/n/y/apple-iphone-11-mhda3hn-a-original-imafwqepdb3fxtug.jpeg?q=70', alt:'a', selected: true },
        { id: 2, src: 'https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/y/n/y/apple-iphone-11-mhda3hn-a-original-imafwqepmmrxjzzd.jpeg?q=70', alt:'b', selected: false },
        { id: 3, src: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70', alt:'c', selected: false },
        { id: 4, src: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/v/w/j/iphone-11-128-a-mwm02hn-a-apple-0-original-imafkg24bhgxu9ux.jpeg?q=70', alt:'d', selected: false },
        { id: 5, src: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/d/u/h/iphone-11-128-u-mwm02hn-a-apple-0-original-imafkg24r2ragyqf.jpeg?q=70', alt:'e', selected: false },
    ]);

    const [mainPic, setMainPic] = useState(pics[0]);

    const handleSelectMainPick = (picObj) => {
        setMainPic(picObj);
        // changed selected property to true
        const updatedPics = pics.map(pic => pic.id === picObj.id ? { ...pic, selected: true } : { ...pic, selected: false });
        setPics(updatedPics);
    }

    return ( 
        <div className="product-pics">
            <div className="select-pics">
                {pics.map((pic) => (
                    <img key={pic.id} src={pic.src} alt={pic.alt} className='tiny-pic' style={{ border: pic.selected && '2px solid #3366ff' }} onMouseOver={() => handleSelectMainPick(pic)} />
                ))}
            </div>
            <div className="main-pic">
                 <img src={mainPic.src} alt={mainPic.alt} className="main-pic"/>
            </div>
        </div>
    );
}
 
export default ProductsUi;