import React, {useState} from "react"
import Navigation from './Navigation/Nav.js'
import Products from "./Products/Products.js"
import Recommended from "./Recommended/Recommended.js"
import Sidebar from "./Sidebar/Sidebar.js"
import Card from './components/Card.js'
import Hero from "./Hero/Hero.js"

// import data
import products from './db/data.js'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //Input filter
  const handleInputChange = event =>{
    setQuery(event.target.value) 
  }

  const filteredItems = products.filter((product)=>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  //Radio filter
  const handleChange= event =>{
    setSelectedCategory(event.target.value)
  }

  //this Buttons filters 
  const handleClick = event =>{
    setSelectedCategory(event.target.value)
  }


  function filteredData(products, selected, query){
    let filteredProducts = products

    console.log('I am adding this feature')


    //Filtering input items 
    if(query){
      filteredProducts = filteredItems
    }

    console.log('this b1 commit')

    //SelectedFilter 
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) => 
        category === selected || 
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      )
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice})=> (
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

  const result = filteredData(products, selectedCategory , query)

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Hero img={'https://w0.peakpx.com/wallpaper/830/1014/HD-wallpaper-sneakers-shoes-legs-asphalt-tablet-laptop-background.jpg'}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  );
}

export default App;
