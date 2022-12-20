import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";

const TopBrands = () => {
	const brands = [
		{
			src: "https://images-static.nykaa.com/uploads/1627c7ba-910a-4517-b98c-e3be18ad9f72.gif?tr=w-400,cm-pad_resize",
			heading: "Picture Perfect Hair, Picture Perfect Journeys",
			tag: "Pick a travel combo kit on ₹1859, Mini on ₹1199",
		},
		{
			src: "https://images-static.nykaa.com/uploads/d623abec-7014-49f6-8143-7d6b30d3342f.jpg?tr=w-400,cm-pad_resize",
			heading: "e.l.f.ing amazing new launches",
			tag: "Flat 15% off + lipstick on ₹799",
		},
		{
			src: "https://images-static.nykaa.com/uploads/d75e91cc-9456-4440-9c06-5ff5d447d97d.jpg?tr=w-400,cm-pad_resize",
			heading: "Flat 10% Off On The Entire Range",
			tag: "Quality Haircare Without Compromise",
		},
		{
			src: "https://images-static.nykaa.com/uploads/29721c46-753f-434a-8da5-037422f1c780.jpg?tr=w-400,cm-pad_resize",
			heading: "Up To 35% Off",
			tag: "Makeup That Stays Through The Day!",
		},
		{
			src: "https://images-static.nykaa.com/uploads/5abf6c68-ac00-49d8-ad4b-76da5c1b8df1.png?tr=w-400,cm-pad_resize",
			heading: "25% Off On Combos + Face Scrub On ₹799",
			tag: "Build Your Winter Anti-Dandruff Routine",
		},
		{
			src: "https://images-static.nykaa.com/uploads/bf97e2a2-52b2-4dd4-bc35-bf5d5295abbb.jpg?tr=w-400,cm-pad_resize",
			heading: "Up To 15% Off",
			tag: "#1 Dermatologist Recommended Brand in India",
		},
		{
			src: "https://images-static.nykaa.com/uploads/90f9bebe-9dd1-46b4-9c5a-4bced3e570c8.jpg?tr=w-400,cm-pad_resize",
			heading: "Up To 20% Off",
			tag: "On Entire Range",
		},
		{
			src: "https://images-static.nykaa.com/uploads/38886827-0fd8-431a-86fe-b3808ad3e3c2.jpg?tr=w-400,cm-pad_resize",
			heading: "Holiday Gift Set Up To 40% Off",
			tag: "+ Exciting Gifts on purchase!",
		},
		{
			src: "https://images-static.nykaa.com/uploads/697352c8-e151-4e34-87ad-2ad6d5e4ed26.jpg?tr=w-400,cm-pad_resize",
			heading: "Complete Your Party Look In Minutes",
			tag: "With Huda Beauty's Lovefest Collection",
		},
	];
	return (
		<SimpleGrid
			columns={{ base: 1, sm: 2, lg: 3 }}
			spacing={5}
			w={"80%"}
			m={"auto"}
			my={"60px"}
		>
			{brands.map(({ src, heading, tag }, index) => {
				return (
					<Box
						key={index}
						shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
						px={5}
					>
						<Image
							src={src}
							alt={heading}
							borderRadius={"lg"}
							my={"20px"}
						/>
						<Heading fontSize={"md"}>{heading}</Heading>
						<Text fontSize={"sm"}>{tag}</Text>
					</Box>
				);
			})}
		</SimpleGrid>
	);
};

export default TopBrands;
