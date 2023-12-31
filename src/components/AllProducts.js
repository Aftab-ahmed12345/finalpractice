import { APIs } from "../const/APIs";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllProducts() {
    const [product, setProducts] = useState([]);
    const [error, setError] = useState(false);
    
    const fetchAllProductsData = async () => {
        try {
            const response = await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCT);
            
            setProducts(response.data);
            setError(false);
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllProductsData();
    }, []);

    return (
        <>
            <div className="container row">
                {
                    product.length === 0 ? (
                        <div className="d-flex my-5 justify-content-center align-items-center">
                            {
                                error ? <span className="text-danger">Error while fetching data from API</span> : <Spinner animation="grow" />
                            }
                        </div>
                    ) : (
                        product.map(p => (
                            <div className="col-sm-12 col-md-6 col-lg-4  mt-5" key={p.id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={p.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text">Price {p.price}</p>
                                    </div>
                                    <Link to={`/products/${p.id}`} className="btn btn-dark">Visit Product</Link>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    );
}

export default AllProducts;
