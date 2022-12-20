import { Routes, Route } from "react-router-dom";

import React from "react";
import Dummy from "./Dummy";
import BrandsPage from "../Pages/BrandsPage";
import BrandProducts from "../Components/BrandProducts";
import ProductsPage from "../Pages/ProductsPage";
import Home from "../Pages/Home";
import SignInpage from "../Pages/SignInpage";
import SignupPage from "../Pages/SignUpPage";
import CartPage from "../Pages/CartPage";
import IndividualProduct from "../Pages/IndividualProduct";
import PaymentPage from "../Pages/PaymentPage";
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
			<Route path="/:id" element={<IndividualProduct />} />
			<Route path="/signin" element={<SignInpage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/payment" element={<PaymentPage />} />
			<Route path="/dummy" element={<Dummy />} />
		</Routes>
	);
};

export default AllRoutes;
