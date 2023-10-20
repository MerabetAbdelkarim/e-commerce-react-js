import React, { useState } from "react"
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from './Recommended/Recommended.jsx'
import './index.css'
import Sidebar from "./Sidebar/Sidebar";
// Database
import products from './db/data'
import Card from "./Components/Card";
function App() {
  const [selectedCategory, setSelecedCategory] = useState(null);
  //--------------------  Input Filter -----------------------------------------
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  }
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 
  );
  //--------------------  RAdio Filter -----------------------------------------
  const handleChange = event => {
    setSelecedCategory(event.target.value)
  }

  //--------------------  Buttons Filter -----------------------------------------
  const handleClick = event =>{
    setSelecedCategory(event.target.value)
  } 
  function filtedData(product, selected, query){
    let filteredProducts = product;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
          category === selected || 
          color === selected || 
          company === selected || 
          newPrice === selected || 
          title === selected 
      )
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice,company,color,category}) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice} 
      />
    ))
  }

  const result = filtedData(products, selectedCategory, query)
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>
  );
}

export default App;
