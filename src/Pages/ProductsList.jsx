import { Container } from "react-bootstrap";
import { ProductItem } from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/slices/productsSlice";



export function ProductsList() {
  const dispatch = useDispatch()
  
  const { products, loading, error } = useSelector((state) => state.products)


  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])

  const productList = products.map((product) => <ProductItem key={product.id} product={product}/>)

  if (error != null) {
    return <h1 className=" alert alert-danger">error 404</h1>
  }

  return (
    <div className="bg-dark-subtle p-3">
      <h2 className="text-center mb-4">Book List</h2>
      <Container>
        {loading ? <h1 className="text-center py-5">loading.....</h1> : productList}
      </Container>
    </div>
  )
}
