import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/slices/productsSlice";
import { useNavigate } from "react-router-dom";


export function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } =  useSelector(state => state.products)
  const productsId = products.length


  const [product, setProduct] =  useState({
    id: `${productsId+1}`,
    title: "",
    price: "",
    category: "",
    thumbnail: ""
  })

  const changeHandler = (e) =>{
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }
  
  const submitHandler = (e) =>{
    e.preventDefault()
    navigate("/")
    dispatch(addProduct(product))
  }

  return (
    <div className="add-product py-5">
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control onChange={changeHandler} type="text" placeholder="add Title" name="title"  value={product.title}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={changeHandler} type="number" placeholder="Add Price" name="price"  value={product.price}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control onChange={changeHandler} type="text" placeholder="Add Category" name="category" value={product.category} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control onChange={changeHandler} type="text" placeholder="Add URL Image" name="thumbnail" value={product.thumbnail} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}
