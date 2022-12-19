import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export const cats = [
	{
		src: "https://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg",
		text: "Blush",
		value: "blush",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/bronzer-2d423487eea3e4571229bd95689bb4eb4331f05740f3921ede7c7c765c7954b1.svg",
		text: "Bronzer",
		value: "bronzer",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg",
		text: "Eyebrow",
		value: "eyebrow",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg",
		text: "Eyeliner",
		value: "eyeliner",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/eyeshadow-67f9f8fd19df1862c95122f9b3460c7e6674d5a6d178cde00e6e4be908dd898a.svg",
		text: "Eyeshadow",
		value: "eyeshadow",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg",
		text: "Foundation",
		value: "foundation",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/lip_liner-3f40bb63957aa7d47e3a2d1356b9380aa093271e5d58f3518181fd427e388d93.svg",
		text: "Lip Liner",
		value: "lip_liner",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/lipstick-4531b48ee71839393857e24c8cbc4dede1f99d2284ef82a6eb0a2a4d03540a14.svg",
		text: "Lip Stick",
		value: "lipstick",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg",
		text: "Mascara",
		value: "mascara",
	},
	{
		src: "https://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg",
		text: "Nail Polish",
		value: "nail_polish",
	},
];
const Categories = () => {
	return (
		<>
			<VStack spacing={4}>
				{cats.map(({ src, text, value }, index) => {
					return (
						<Link to={`/categories/${value}`} key={index}>
							<HStack key={index} spacing={4}>
								<Image src={src} alt={text} width="9%" />
								<Text>{text}</Text>
							</HStack>
						</Link>
					);
				})}
			</VStack>
		</>
	);
};

export default Categories;
