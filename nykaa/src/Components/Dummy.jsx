import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
export const dummy_data = [
	{
		id: 1019,
		brand: "maia's mineral galaxy",
		name: "Mineral Eye Brow Liner Charcoal Brown",
		price: "0.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.purpicks.com/wp-content/uploads/2018/06/Maia%E2%80%99s-Mineral-Galaxy-Mineral-Eye-Brow-Liner-Charcoal-Brown.jpg",
		product_link:
			"https://www.purpicks.com/product/maias-mineral-galaxy-mineral-eye-brow-liner-charcoal-brown/",
		website_link: "https://purpicks.com/",
		description: "",
		rating: null,
		category: "pencil",
		product_type: "eyebrow",
		tag_list: ["EWG Verified", "purpicks"],
		created_at: "2018-06-30T19:19:30.782Z",
		updated_at: "2018-09-02T22:52:06.474Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/1019.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/019/original/open-uri20180630-4-1h8zp2k?1530390372",
		product_colors: [
			{
				hex_value: "#5B4439",
				colour_name: "Charcoal Brown",
			},
			{
				hex_value: "#000000",
				colour_name: "Black",
			},
			{
				hex_value: "#5E3C30",
				colour_name: "Cocoa",
			},
			{
				hex_value: "#4D4D4B",
				colour_name: "Dark Gray",
			},
			{
				hex_value: "#6E4E2A",
				colour_name: "Hazel Brown",
			},
		],
	},
	{
		id: 987,
		brand: "nyx",
		name: "Eyebrow Marker",
		price: "9.75",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwe10bfffa/ProductImages/Eyes/Eyebrow_Marker/eyebrowmarker_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/eyebrow-marker/NYX_034.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Sculpt fill in and enhance your natural eyebrows with our felt-tip Eyebrow Marker. The color resists smearing and smudging and wears all day long.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:56.532Z",
		updated_at: "2017-12-24T02:32:56.924Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/987.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/987/original/data?1514082776",
		product_colors: [
			{
				hex_value: "#8B6534",
				colour_name: "Medium",
			},
			{
				hex_value: "#4D2712",
				colour_name: "Deep",
			},
		],
	},
	{
		id: 986,
		brand: "nyx",
		name: "Eyebrow Kit With Stencil",
		price: "15.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2636bb00/ProductImages/Eyes/Eyebrow_Kit_with_Stencils/800897142957_eyebrowkitstencil_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/eyebrow-kit-with-stencil/NYX_033.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Our all-in-one eyebrow kit has everything you need to keep your brows looking on point. The kit includes 4 universally flattering shades for all brow tones a slanted eyebrow brush an eyebrow comb and 3 different stencils to help you get the perfect shape for your face. Now you can fill define and shape your brows like never before!",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:56.029Z",
		updated_at: "2017-12-24T02:32:56.324Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/986.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/986/original/open-uri20171224-4-14z5x4y?1514082775",
		product_colors: [],
	},
	{
		id: 985,
		brand: "nyx",
		name: "Eyebrow Push-Up Bra",
		price: "10.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwadba3ae6/ProductImages/Eyes/Eyebrow_Push_Up_Bra/eyebrowpushupbra_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/eyebrow-push-up-bra/NYX_030.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Play up your natural assets with this dual-sided pencil that delivers sensual eyebrows in just a few minutes. Use the universally flattering brow pencil to draw and fill in your arches and the highlighting end to lift and brighten. Like the LBD of pencils the effect is captivating and undeniably sexy.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:55.489Z",
		updated_at: "2017-12-24T02:32:55.884Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/985.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/985/original/data?1514082775",
		product_colors: [],
	},
	{
		id: 984,
		brand: "nyx",
		name: "3-Dimensional Brow Marker",
		price: "10.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1e63b16f/ProductImages/2017/Eyes/3Dimensional_Brow_Marker/3dimensionalbrowmarker_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/3-dimensional-brow-marker/NYX_499.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description: "",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:54.098Z",
		updated_at: "2017-12-24T02:32:54.491Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/984.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/984/original/open-uri20171224-4-1uh3nw7?1514082773",
		product_colors: [
			{
				hex_value: "#B78F69",
				colour_name: "Blonde",
			},
			{
				hex_value: "#99663A",
				colour_name: "Auburn",
			},
			{
				hex_value: "#56382D",
				colour_name: "Chocolate Brown",
			},
			{
				hex_value: "#403028",
				colour_name: "Charcoal",
			},
			{
				hex_value: "#765948",
				colour_name: "Brunette",
			},
			{
				hex_value: "#8A6554",
				colour_name: "Soft Brown",
			},
		],
	},
	{
		id: 983,
		brand: "nyx",
		name: "Eyebrow Shaper",
		price: "8.75",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw7bb4049d/ProductImages/Eyes/Eyebrow_Shaper/eyebrowshaper_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/eyebrow-shaper/NYX_031.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Tame unruly eyebrows with this ingenious wax pencil. The blend of waxes is enriched with Vitamin E and leaves arches in tip-top condition and impeccable shape with just a few strokes.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:53.558Z",
		updated_at: "2017-12-24T02:32:53.894Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/983.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/983/original/data?1514082773",
		product_colors: [],
	},
	{
		id: 982,
		brand: "nyx",
		name: "Build 'Em Up Brow Powder",
		price: "8.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw837424ec/ProductImages/2017/Eyes/Build_Em_Up_Brow_Powder/buildemupbrowpowder_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/build-em-up-brow-powder/NYX_446.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description: "",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:52.257Z",
		updated_at: "2017-12-24T02:32:52.646Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/982.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/982/original/open-uri20171224-4-15afdg3?1514082772",
		product_colors: [
			{
				hex_value: "#7B5C3F",
				colour_name: "Blonde",
			},
			{
				hex_value: "#5E4C3E",
				colour_name: "Taupe",
			},
			{
				hex_value: "#4C392B",
				colour_name: "Soft Brown",
			},
			{
				hex_value: "#4F2F22",
				colour_name: "Auburn",
			},
			{
				hex_value: "#151419",
				colour_name: "Brunette",
			},
			{
				hex_value: "#0C160E",
				colour_name: "Espresso",
			},
			{
				hex_value: "#0B0D0A",
				colour_name: "Ash Brown",
			},
			{
				hex_value: "gray3",
				colour_name: "Black",
			},
		],
	},
	{
		id: 981,
		brand: "nyx",
		name: "3-in-1 Brow Pencil",
		price: "13.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw840d556c/ProductImages/2017/Eyes/3_in_1_Brow_Pencil/3in1browpencil_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/3-in-1-brow-pencil/NYX_407.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"One unbeatable brow beautifier, three go-to goodies. Our versatile 3-in-1 Brow includes everything you need to build exquisite arches. A retractable pencil, Powder, and brow mascara, available in 10 pigmented shades. Achieve eyebrows that are as natural-looking or bold as you desire by applying these essentials alone or together. To combine ’em all, simply outline with the pencil and fill in with the Powder. Complete the look by setting your brows with a swipe of mascara.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:50.424Z",
		updated_at: "2017-12-24T02:32:50.840Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/981.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/981/original/open-uri20171224-4-1i8mko9?1514082770",
		product_colors: [
			{
				hex_value: "#FAFBF6",
				colour_name: "Blonde",
			},
			{
				hex_value: "#FFFEFD",
				colour_name: "Taupe",
			},
			{
				hex_value: "#FCFFFF",
				colour_name: "Auburn",
			},
			{
				hex_value: "#FFFEFB",
				colour_name: "Brunette",
			},
			{
				hex_value: "#FFFEFF",
				colour_name: "Espresso",
			},
			{
				hex_value: "#FFFFFD",
				colour_name: "Ash Brown",
			},
			{
				hex_value: "white",
				colour_name: "Black",
			},
		],
	},
	{
		id: 980,
		brand: "nyx",
		name: "Proof It! Waterproof Eyebrow Primer",
		price: "7.0",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa61027e6/ProductImages/Eyes/Proof_It_Waterproof_Eyebrow_Primer/proofitwaterproofeyebrowprimer_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/proof-it-waterproof-eyebrow-primer/NYX_153.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Smooth and conditioning our clear eyebrow gel sets your brows in place all day, rain or shine. Apply over brows before shaping with powder to keep them in control. Our formulation was made specially formulated for thin sparse brows.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:49.631Z",
		updated_at: "2017-12-24T02:32:50.126Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/980.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/980/original/data?1514082769",
		product_colors: [],
	},
	{
		id: 979,
		brand: "nyx",
		name: "Eyebrow Powder Pencil",
		price: "6.5",
		price_sign: "$",
		currency: "USD",
		image_link:
			"https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw85601149/ProductImages/2017/Eyes/Eyebrow_Powder_Pencil/eyebrowpowderpencil_main.jpg?sw=390&sh=390&sm=fit",
		product_link:
			"https://www.nyxcosmetics.com/eyebrow-powder-pencil/NYX_408.html?cgid=brows",
		website_link: "https://www.nyxcosmetics.com",
		description:
			"Close your eyes and picture the perfect brows. Are they defined, yet delicate? Create the brows of this daydream with the brand new Eyebrow Powder Pencil. Our unique pencil’s superfine texture provides a powdery-soft, matte finish. Put the finishing touches on your arches by using the included spoolie brush to smooth out the rich color.",
		rating: null,
		category: null,
		product_type: "eyebrow",
		tag_list: [],
		created_at: "2017-12-24T02:32:46.856Z",
		updated_at: "2017-12-24T02:32:47.732Z",
		product_api_url:
			"https://makeup-api.herokuapp.com/api/v1/products/979.json",
		api_featured_image:
			"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/979/original/open-uri20171224-4-1wo69r1?1514082766",
		product_colors: [
			{
				hex_value: "#FFF0E2",
				colour_name: "Blonde",
			},
			{
				hex_value: "#F7EFE4",
				colour_name: "Taupe",
			},
			{
				hex_value: "#F5EBE2",
				colour_name: "Soft Brown",
			},
			{
				hex_value: "#FBEFE3",
				colour_name: "Caramel",
			},
			{
				hex_value: "#FBEBDB",
				colour_name: "Auburn",
			},
			{
				hex_value: "#F6EDE4",
				colour_name: "Brunette",
			},
			{
				hex_value: "#F6EBE5",
				colour_name: "Espresso",
			},
			{
				hex_value: "#F7EDE4",
				colour_name: "Ash Brown",
			},
			{
				hex_value: "#E1E1E1",
				colour_name: "Black",
			},
		],
	},
];
const Dummy = () => {
	axios
		.get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
		.then((response) => console.log(response))
		.catch((err) => console.log(err));
	return (
		<>
			<Box
				bg="white"
				maxW={300}
				// border="1px"
				shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
			>
				<Image
					src={
						"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/980/original/data?1514082769"
					}
					alt="test"
					w={"80%"}
					m={"auto"}
					objectFit={"cover"}
					transition={"all .3s ease"}
					_hover={{
						transition: "all .3s ease",
						w: "90%",
						zIndex: "2",
					}}
				/>
				<VStack>
					<Text fontSize={"sm"}>Brand</Text>
					<Text fontSize={"xl"}>Name</Text>
					<Text fontSize={"sm"}>Price</Text>
					<SimpleGrid columns={[1, 2, 3, 4]} spacing={2}>
						{[
							{
								hex_value: "#FFF0E2",
								colour_name: "Blonde",
							},
							{
								hex_value: "#F7EFE4",
								colour_name: "Taupe",
							},
							{
								hex_value: "#F5EBE2",
								colour_name: "Soft Brown",
							},
							{
								hex_value: "#FBEFE3",
								colour_name: "Caramel",
							},
							{
								hex_value: "#FBEBDB",
								colour_name: "Auburn",
							},
							{
								hex_value: "#F6EDE4",
								colour_name: "Brunette",
							},
							{
								hex_value: "#F6EBE5",
								colour_name: "Espresso",
							},
							{
								hex_value: "#F7EDE4",
								colour_name: "Ash Brown",
							},
							{
								hex_value: "#E1E1E1",
								colour_name: "Black",
							},
						].map((ele, i) => {
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
				</VStack>
			</Box>
		</>
	);
};

export default Dummy;
