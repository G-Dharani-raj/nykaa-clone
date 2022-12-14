import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	SimpleGrid,
	Circle,
} from "@chakra-ui/react";

export default function Product({
	brand,
	category,
	image_link,
	name,
	price,
	product_colors = [],
	product_type,
}) {
	const colors = product_colors;
	console.log(colors.length);
	return (
		<Center py={12}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}
			>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"auto"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						backgroundImage: `url(${image_link})`,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}
				>
					<Image
						rounded={"lg"}
						height={"auto"}
						width={282}
						objectFit={"cover"}
						src={image_link}
					/>
					{/* <img
						src={image_link}
						alt={name}
						width="80%"
						marginLeft="50%"
					/> */}
				</Box>
				<Stack pt={10} align={"center"}>
					<Text
						color={"gray.900"}
						fontSize={"md"}
						fontWeight={"bold"}
						textTransform={"uppercase"}
					>
						{brand}
					</Text>
					<Heading
						fontSize={"2xl"}
						fontFamily={"body"}
						fontWeight={500}
					>
						{name}
					</Heading>
					<Stack direction={"row"} align={"center"}>
						<Text fontWeight={800} fontSize={"xl"}>
							${price}
						</Text>
					</Stack>
					{colors.length !== 0 ? (
						<SimpleGrid columns={[5]} spacing={5}>
							{colors.map((ele, i) => {
								return (
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
								);
							})}
						</SimpleGrid>
					) : null}
				</Stack>
			</Box>
		</Center>
	);
}
