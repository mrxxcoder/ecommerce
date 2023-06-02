import { useState, useEffect } from 'react';
import Product from './Product';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';

function ProductsList() {
	const api_url = 'https://fakestoreapi.com/products';
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const getProducts = () => {
		fetch(api_url)
			.then(response => response.json())
			.then(data => setProducts(data));
	};

	const getProductsInCategory = catName => {
		fetch(`${api_url}/category/${catName}`)
			.then(res => res.json())
			.then(data => setProducts(data));
	};

	const getCategories = () => {
		fetch(`${api_url}/categories`)
			.then(response => response.json())
			.then(data => setCategories(data));
	};

	useEffect(() => {
		getProducts();
		getCategories();
	}, []);

	return (
		<>
			<h2 className="text-center p-5">Our Products</h2>
			<div className="container">
				<button
					className="btn btn-info"
					style={{ marginRight: '5px', marginBottom: '20px' }}
					onClick={getProducts}
				>
					All
				</button>
				{categories.map(cat => {
					return (
						<button
							key={cat}
							className="btn btn-info"
							style={{ marginRight: '5px', marginBottom: '20px' }}
							onClick={() => {
								getProductsInCategory(cat);
							}}
						>
							{cat}
						</button>
					);
				})}
				<div className="row">
					{products.map(product => {
						return (
							<div className="col-3" key={product.id}>
								<Product product={product} showButton={true} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ProductsList;
