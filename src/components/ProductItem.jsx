import { Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";



export function ProductItem( { product } ) {
  const dispatch = useDispatch()


    const deleteHandler = (id) =>{
      dispatch(deleteProduct(id))
      console.log(id);
    }


  return (
    <Row className=" border align-items-center p-3 rounded mb-3">
            <Col sm={8}>
                <h1>{product.title}</h1>
            </Col>
            <Col sm={4}>
                <Link to={`/product/${product.id}`} className="btn btn-success me-3">View Product</Link>
                <button onClick={() => deleteHandler(product.id)} className="btn btn-danger">Delete Product</button>
            </Col>
        </Row>
  )
}


ProductItem.propTypes = {
  product: PropTypes.any,
}