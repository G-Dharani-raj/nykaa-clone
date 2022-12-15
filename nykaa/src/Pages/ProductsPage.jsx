import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Components/Product";

const ProductsPage = () => {
	const { product_type } = useParams();
	const [data, setData] = React.useState([]);
	const [current, setCurrent] = React.useState(1);
	// const [page, setPage] = React.useState(1);
	React.useEffect(() => {
		try {
			axios
				.get(
					`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`
				)
				.then((response) => setData(response.data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, [product_type]);
	// console.log(data);
	const handleCount = (value) => {
		setCurrent(current + value);
	};
	let totalPages = Math.ceil(data.length / 10) || 1;

	let new_data = [];
	if (data.length > 0) {
		// setPage(Math.ceil(current / 10));
		for (let i = current - 1; i < current + 9; i++) {
			// console.log(i, current);
			new_data.push(data[i]);
		}
	}
	console.log(new_data);
	return (
		<Flex flexDirection="column" align={"center"}>
			<SimpleGrid
				columns={[1, 2, 3, 4]}
				spacing={10}
				width="70%"
				margin="auto"
			>
				{new_data.map(
					({
						id,
						brand,
						category,
						api_featured_image,
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
								api_featured_image={api_featured_image}
								name={name}
								price={price}
								product_colors={product_colors}
								product_type={product_type}
							/>
						);
					}
				)}
			</SimpleGrid>

			<Flex>
				<Button
					onClick={() => handleCount(-10)}
					isDisabled={Math.ceil(current / 10) === 1 ? true : false}
				>
					Previous
				</Button>
				<Button isDisabled={true}>{Math.ceil(current / 10)}</Button>
				<Button
					onClick={() => handleCount(10)}
					isDisabled={
						Math.ceil(current / 10) === totalPages - 1
							? true
							: false
					}
				>
					Next
				</Button>
			</Flex>
		</Flex>
	);
};

export default ProductsPage;
