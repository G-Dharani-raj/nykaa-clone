import { Routes, Route } from "react-router-dom";

import React from "react";
import Dummy from "./Dummy";
import BrandsPage from "../Pages/BrandsPage";
import BrandProducts from "../Components/BrandProducts";
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/brands" element={<BrandsPage />} />
			<Route path="/brands/:brand" element={<BrandProducts />} />

			<Route path="/dummy" element={<Dummy />} />
		</Routes>
	);
};

export default AllRoutes;
