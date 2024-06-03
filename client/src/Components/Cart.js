import React,{useState} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';


function Cart() {

    const [product, setProduct] = useState([
        {
          url: 'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/san-ysidro-ranch/media/sanysidro-weddings-stonehouse-601d63098d4d1.jpg',
          name: ' SAN YSIDRO RANCH',
          category: ' Montecito Wedding Venues',
          seller: 'SANTA BARBARA CALIFORNIA',
          price: 1100000
        },
        {
          url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Wedding-Venues-In-Ahmedabad-Cover-image_11th-jan.jpg',
          name: 'The Oberoi Udaivilas',
          category: 'eventertainments',
          seller: 'Travel Triangle',
          price: 1112599
        },
        {
          url: 'https://cdn0.weddingwire.com/vendor/741756/3_2/960/jpg/1538257546-80b1893591011059-1538257545-19cbeca8bff34716-1538257541950-1-IMG_0068.jpeg',
          name: 'Metropol Banquet',
          category: 'Venue',
          seller: 'Los Angeles Wedding Venues',
          price: 1150000
        },
        {
          url: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandbharat-gurugram/images/overview/wedding-and-mice-overview-desktop/wedding.png',
          name: 'Chunda Palace',
          category: 'Wedding Venue',
          seller: ' Luxury Wedding Venues in India - ITC Hotels',
          price: 2504000
        },
        {
          url: 'https://i.pinimg.com/originals/72/74/02/727402aea9e28191bbedc571e1275cf5.jpg',
          name: 'Amusement theme Birthday Party',
          category: 'Birthday Party',
          seller: 'Homefurniturelife Online Store',
          price: 200000
        },
        {
          url: 'https://www.homefurniturelife.com/wp-content/uploads/2022/03/81uK27-uRS._AC_SL1500_.jpg',
          name: 'Space theme Birthday Party',
          category: 'Birthday Party',
          seller: 'Homefurniturelife Online Store',
          price: 100000
        },
      ])
    
      const [cart, setCart] = useState([])
      const [showCart, setShowCart] = useState(false)
    
      const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
      }
    
      const handleShow = (value) => {
        setShowCart(value)
      }
      
     
    
  return (

    <div>
          

          <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }

    </div>
  )
}

export default Cart