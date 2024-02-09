import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"



export function ViewProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [ isLoading, setIsLoading] = useState(false)
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);     
                setProduct(response.data);
                setIsLoading(true)
            } catch (error) {
                
                console.error('Error fetching product data:', error);
            }
        };
        fetchData();
        setIsLoading(false)
    }, [setProduct, id]);
  return (
    <div className="single-product">
        <Container>
            {!isLoading ? <h1 className="text-center py-5">Loading....</h1> : 
                <div className="single-product__content py-5">
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="single-product__content__image text-center">
                                <img className="img-fluid" src={product.thumbnail} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="single-product__content__info">
                                <h3 className="text-center mb-4 text-danger-emphasis">{product.brand}</h3>
                                <h1>Product Title : 
                                    <span className="text-secondary"> {product.title}</span>
                                </h1>
                                <p className="text-secondary">{product.description}</p>
                                <h5>Product Price: <span className="fw-bold text-danger-emphasis">
                                    {product.price}$
                                </span></h5>
                                <h6>Product category: <span className="fw-bold text-danger-emphasis">
                                    {product.category}$
                                </span></h6>
                                <div className="d-flex justify-content-between py-2">
                                    <h6 className="text-danger-emphasis">rating : {product.rating}</h6>
                                    <h6 className="text-danger-emphasis">stock : {product.stock}</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
        </Container>
    </div>
  )
}
