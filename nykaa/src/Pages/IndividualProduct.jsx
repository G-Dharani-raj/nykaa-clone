import {
	Box,
	Center,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const IndividualProduct = () => {
	let product = JSON.parse(localStorage.getItem("product"));
	const {
		id,
		brand,
		name,
		price,
		description,
		product_type,
		api_featured_image,
		product_colors,
	} = product;

	return (
		<Flex direction="column">
			<Image src={api_featured_image} alt={name} width="15%" />
			<br />
			<br />
			<br />

			<Box>
				{product_colors.length > 0 ? (
					<Flex gap={4}>
						{product_colors.map((ele, i) => {
							return (
								<Tooltip label={ele.colour_name}>
									<div
										key={i}
										style={{
											height: "20px",
											widht: "20px",
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
					</Flex>
				) : null}
			</Box>
			<Heading fontSize={"sm"}>{brand}</Heading>
			<Heading fontSize={"lg"}>{name}</Heading>
			<Text fontSize={"md"}>${price}</Text>
			<Text>{description}</Text>
		</Flex>
	);
};

export default IndividualProduct;
