import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpeg";
<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
<<<<<<< Updated upstream
      const styles = cart.map(item => item._id);
      console.log(styles);
      if (styles.length) {
        const { data } = await addOrder({ variables: { styles } });
        const styleData = data.addOrder.styles;
        
        styleData.forEach((item) => {
=======
      const products = cart.map(item => item._id);
      console.log(products);
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
        
        productData.forEach((item) => {
>>>>>>> Stashed changes
          idbPromise('cart', 'delete', item);
        });
      }
      
    }

    saveOrder();
  }, [addOrder]);
  
  return (
    <div>
      <Link to="/">
          ← Back to Our Style Gallery
        </Link>
      <Jumbotron>
        
        <h1>Success!</h1>
        <h2>
          Thank you for your purchase!
        </h2>
        <h2>
          Click the link below to submit your order to your stylist. Your new stylist will contact you with your appointment details. 
          </h2>
          <button type="button" className="btn btn-primary btn-lg btn-block"><a className="text-light" href="mailto:test@test.com">Click to Send to Stylist!</a></button>
          <div>
          <img src={heroImage} className='heroImage' alt='scissors and comb' />
          </div>
          
       
      </Jumbotron>
    </div>
  );
};

export default Success;