import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
	const { product, showButton } = props;
	return (
		<>
			<div className="card card-enhanced">
				<img
					src={product.image}
					className="card-img-top card-image"
					alt={product.title}
				/>
				<div className="card-body">
					<h5 className="card-title">{product.title}</h5>
					<div className="card-description-box">
						<p className="card-text">{product.description}</p>
					</div>
					<p className="fs-3 fw-bold	">Price: {product.price}$</p>
				</div>
				{showButton && (
					<Link
						className="btn btn-primary card-button"
						to={`/product/${product.id}`}
					>
						Details
					</Link>
				)}
			</div>
		</>
	);
}

export default Product;
