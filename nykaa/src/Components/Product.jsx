import {
	Box,
	Text,
	Image,
	SimpleGrid,
	VStack,
	IconButton,
	Tooltip,
} from "@chakra-ui/react";
import "./Product.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import React from "react";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
export default function Product({
	id,
	brand,
	category,
	api_featured_image,
	name,
	price,
	product_colors = [],
	product_type,
	description,
}) {
	const colors = product_colors;
	const navigate = useNavigate();
	// const [cart, setCart] = React.useState(
	// 	JSON.parse(localStorage.getItem("cart")) || []
	// );

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
				<IconButton
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
						alert("Added to cart!");
						cart.push({
							id,
							brand,
							name,
							price,
							description,
							product_type,
							api_featured_image,
							product_colors,
						});

						localStorage.setItem("cart", JSON.stringify(cart));
					}}
				/>
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
