import React from "react";
import Carousel from "../Components/MainPageComps/Carousel";
import ProductsCarousel from "../Components/MainPageComps/ProductsCarousel";
import { Heading } from "@chakra-ui/react";
import Dummy from "../Components/Dummy";
import TopBrands from "../Components/MainPageComps/TopBrands";
import Sidebar from "../Components/Sidebar";

const Home = () => {
	return (
		<>
			<Carousel key={1} />;
			<div
				style={{ display: "flex", justifyContent: "space-around" }}
				key={2}
			>
				<img
					src="https://images-static.nykaa.com/uploads/ce3cbd44-60db-4d85-994c-6322442cc736.gif?tr=w-1200,cm-pad_resize"
					alt="gif"
					width="43%"
					key={9}
				/>
				<img
					src="https://images-static.nykaa.com/uploads/c437ef70-6d68-46aa-be73-e686c8cd9c6a.jpg?tr=w-1200,cm-pad_resize"
					alt="alt"
					width="43%"
					key={10}
				/>
			</div>
			<img
				src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-2400,cm-pad_resize"
				alt="banner"
				width="95%"
				style={{
					margin: "auto",
					marginTop: "20px",
					marginBottom: "20px",
				}}
				key={3}
			/>
			<div style={{ width: "95%", margin: "auto" }} key={4}>
				<Heading key={7}>Top Brands</Heading>
				<p key={8}>In The Spotlight</p>
			</div>
			<TopBrands key={5} />
			<ProductsCarousel key={6} />
		</>
	);
};

export default Home;
