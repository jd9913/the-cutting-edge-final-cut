import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const styles = cart.map(item => item._id);
      
      if (styles.length) {
        const { data } = await addOrder({ variables: { styles } });
        const styleData = data.addOrder.styles;
    
        styleData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        //send email button to stylist 



      // setTimeout(() => {
      //   window.location.assign('/');
      // }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>
          Thank you for your purchase!
        </h2>
        <h2>
          You will now be redirected to the home page
        </h2>
      </Jumbotron>
    </div>
  );
};

export default Success;