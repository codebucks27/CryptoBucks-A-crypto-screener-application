import{ createContext, useLayoutEffect, useState } from "react"

//creating context object

export const StockContext = createContext({})


//create the provider component

export const StockProvider = ({children}) => {

const [stockData, setStockData] = useState() 
const getStockData = async () => {
  try {

    const data = await fetch(``
    ).then(res => res.json()).then(json => json);
    
  } catch (error) {
      console.log(error);
    
  }
};

useLayoutEffect(() => {
  getStockData();
}, [])

  return(
    <StockContext.Provider value={{stockData}}>
    {children}
    </StockContext.Provider>
  )

  
};