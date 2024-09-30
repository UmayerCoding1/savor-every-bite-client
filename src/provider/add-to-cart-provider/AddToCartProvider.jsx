import { createContext, useState } from "react";


export const AddToCartContext = createContext(null);

const AddToCartProvider = ({children}) => {
    const [cardProduct,setCardProduct] = useState([]);
    const [card,setCard] = useState([]);
    
     const handleCardProduct = productId => {
       setCardProduct(prev => [...prev,productId]);
       const uniqueItemId = [...new Set(cardProduct)];
       setCard(uniqueItemId)
     }

   

     

      
      
    //  console.log(cardProduct);
     

    const cardContext = {
        card,
        handleCardProduct
    }
    return (
        <AddToCartContext.Provider value={cardContext}>
            {children}
        </AddToCartContext.Provider>
    );
};

export default AddToCartProvider;