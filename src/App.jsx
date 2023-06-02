import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import ProductsList from './Components/ProductsList';
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Slider />
							<ProductsList />
						</>
					}
				/>

				<Route path="about" element={<About />} />
				<Route path="product/:productId" element={<ProductDetails />} />
			</Routes>
		</div>
	);
}

export default App;
