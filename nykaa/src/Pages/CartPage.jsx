import {
	Box,
	Button,
	Center,
	Flex,
	IconButton,
	Image,
	SimpleGrid,
	Text,
	Tooltip,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
// import Product from "../Components/Product";

function Product({
	id,
	brand,
	category,
	api_featured_image,
	name,
	price,
	product_colors = [],
	product_type,
	description,
	index,
	remove_item,
}) {
	const colors = product_colors;
	const navigate = useNavigate();
	// const [cart, setCart] = React.useState(
	// 	JSON.parse(localStorage.getItem("cart")) || []
	// );
	console.log(index);
	return (
		<Box
			bg="#F6F6F6"
			minW={200}
			maxW={400}
			h={400}
			// border="1px"
			shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
			overflowY={"scroll"}
			className="card"
			// key={id}
		>
			<Image
				src={api_featured_image}
				alt="test"
				w={"70%"}
				m={"auto"}
				objectFit={"cover"}
				transition={"all .3s ease"}
				_hover={{
					transition: "all .3s ease",
					transform: "scale(1.2)",
					// zIndex: "2",
				}}
				onClick={() => {
					localStorage.setItem(
						"product",
						JSON.stringify({
							id,
							brand,
							name,
							price,
							description,
							product_type,
							api_featured_image,
							product_colors,
						})
					);
					navigate(`/${id}`);
				}}
			/>
			<VStack>
				<Text fontSize={"sm"}>{brand}</Text>
				<Text fontSize={"xl"}>{name}</Text>
				<Text fontSize={"sm"}>${price}</Text>
				<Button
					icon={<TbShoppingCartPlus />}
					minW={40}
					bg="#E91D63"
					color="white"
					_hover={{
						bg: "white",
						color: "black",
						outline: "1px solid black",
					}}
					_active={{
						bg: "green",
					}}
					onClick={() => {
						console.log(index);
						remove_item(index);
					}}
				>
					Remove from Cart
				</Button>
				{colors.length > 0 ? (
					<SimpleGrid columns={[1, 2, 3, 4]} spacing={2}>
						{colors.map((ele, i) => {
							return (
								<Tooltip label={ele.colour_name}>
									<div
										key={i}
										style={{
											height: "20px",
											widht: "25px",
											backgroundColor: `${ele.hex_value}`,
											borderRadius: "50%",
											display: "inline-block",
										}}
									>
										<h1 style={{ visibility: "hidden" }}>
											tex
										</h1>
									</div>
								</Tooltip>
							);
						})}
					</SimpleGrid>
				) : null}
			</VStack>
		</Box>
	);
}

const CartPage = () => {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	console.log(cart);
	let total = 0;
	const [cproducts, setC] = React.useState(false);
	const { isAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();
	const remove_item = (index) => {
		setC(true);
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		cart.splice(index, 1);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	React.useEffect(() => {
		setC(false);
	}, [cproducts]);
	return (
		<>
			<Flex gap={"10%"}>
				<SimpleGrid columns={[1, 2, 3, 4]} spacing={4} width={"70%"}>
					{cart.map((ele, index) => {
						total = total + Number(ele.price);
						console.log(index);
						return (
							<Product
								key={index}
								index={index}
								id={ele.id}
								brand={ele.brand}
								category={ele.category}
								api_featured_image={ele.api_featured_image}
								name={ele.name}
								price={ele.price}
								product_colors={ele.product_colors}
								product_type={ele.product_type}
								description={ele.description}
								remove_item={remove_item}
							/>
						);
					})}
				</SimpleGrid>
				<Center>
					<VStack>
						<Text>
							Items in cart: <span>{cart.length}</span>
						</Text>
						<Text>
							Total: $<span>{total}</span>
						</Text>
						<Button
							colorScheme="blue"
							onClick={() => {
								if (!isAuth) {
									alert("Please login first");
									navigate("/signin");
								} else {
									navigate("/payment");
								}
							}}
						>
							Proceed to Payment
						</Button>
					</VStack>
				</Center>
			</Flex>
		</>
	);
};

export default CartPage;
