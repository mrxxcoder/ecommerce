import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from './Product';

function ProductDetails() {
	const api_url = 'https://fakestoreapi.com/products';
	const [product, setProduct] = useState({});

	const params = useParams();

	console.log(params);
	useEffect(() => {
		fetch(`${api_url}/${params.productId}`)
			.then(response => response.json())
			.then(product => setProduct(product));
	}, []);
	return <Product product={product} showButton={false} />;
}

export default ProductDetails;
