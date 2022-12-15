import { Routes, Route } from "react-router-dom";

import React from "react";
import Dummy from "./Dummy";
import BrandsPage from "../Pages/BrandsPage";
import BrandProducts from "../Components/BrandProducts";
import ProductsPage from "../Pages/ProductsPage";
import Home from "../Pages/Home";
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/brands" element={<BrandsPage />} />
			<Route path="/brands/:brand" element={<BrandProducts />} />
			<Route
				path="/categories/:product_type"
				element={<ProductsPage />}
			/>
			<Route path="/dummy" element={<Dummy />} />
		</Routes>
	);
};

export default AllRoutes;
