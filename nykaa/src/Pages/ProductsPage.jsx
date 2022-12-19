import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Components/Product";
import Sidebar from "../Components/Sidebar";

const ProductsPage = () => {
	const { product_type } = useParams();
	const [type, setType] = React.useState(product_type);
	const [data, setData] = React.useState([]);
	const [current, setCurrent] = React.useState(1);
	// const [page, setPage] = React.useState(1);
	React.useEffect(() => {
		try {
			axios
				.get(
					`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
				)
				.then((response) => setData(response.data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, [type]);
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
		<Flex spacing={2}>
			<Sidebar type={type} setType={setType} />

			<Flex flexDirection="column" align={"center"}>
				<SimpleGrid
					columns={[1, 2, 3, 4]}
					spacing={10}
					width="80%"
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
							description,
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
									description={description}
								/>
							);
						}
					)}
				</SimpleGrid>

				<Flex my="20px">
					<Button
						onClick={() => handleCount(-10)}
						isDisabled={
							Math.ceil(current / 10) === 1 ? true : false
						}
						colorScheme="blue"
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
						colorScheme="blue"
					>
						Next
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProductsPage;
