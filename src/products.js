import { productos as originalProducts } from "./database"
import Box from "./components/Box"
import SearchBox from "./components/search-box"
import { useEffect, useState } from "react"
import Loading from "./components/Loading"
function Products() {
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const [inputValue, setInputvalue] = useState("")
  const handleSearch = () => {
    if (inputValue == "" && products) {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          product.id.toLowerCase().includes(inputValue.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setProducts(originalProducts)
      setFilteredProducts(originalProducts)
    }, 3000)
  }, [])
  return (
    <>
      <SearchBox setInputValue={setInputvalue} handleSearch={handleSearch} />
      <div className="products">
        {filteredProducts ? (
          filteredProducts.map((product) => (
            <Box
              key={product.id}
              src={product.img}
              alt={product.name}
              title={product.name}
              price={product.price}
              code={product.id}
            />
          ))
        ) : (
          <div className="loading-container">
            <Loading />
          </div>
        )}
        <hr className="line" />
        <div className="subtitles">
          {(filteredProducts && filteredProducts.length) || 0} resultados
        </div>
      </div>
    </>
  )
}

export default Products
