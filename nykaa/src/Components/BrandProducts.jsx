import React from "react";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import Product from "./Product";

const BrandProducts = () => {
	const { brand } = useParams();
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		try {
			axios
				.get(
					`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
				)
				.then((response) => setData(response.data))
				.catch((error) => console.error(error));
		} catch (error) {
			console.error(error);
		}
	}, [brand]);
	console.log(brand);
	return (
		<SimpleGrid
			columns={[1, 2, 3, 4]}
			spacing={10}
			width="70%"
			margin="auto"
		>
			{data.map(
				({
					id,
					brand,
					category,
					image_link,
					name,
					price,
					product_colors,
					product_type,
				}) => {
					return (
						<Product
							key={id}
							brand={brand}
							category={category}
							image_link={image_link}
							name={name}
							price={price}
							product_colors={product_colors}
							product_type={product_type}
						/>
					);
				}
			)}
		</SimpleGrid>
	);
};

export default BrandProducts;
