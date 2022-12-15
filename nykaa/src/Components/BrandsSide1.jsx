import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const brandslinks = [
	{
		name: "Almay",
		src: "https://logodix.com/logo/2022830.jpg",
		value: "almay",
	},
	{
		name: "Alva",
		src: "https://seeklogo.com/images/A/Alva-logo-1DA05C9A85-seeklogo.com.png",
		value: "alva",
	},
	{
		name: "Anna Sui",
		src: "https://cdn.shopify.com/s/files/1/2376/3827/files/Anna_Sui_Logo-Black1_93bd821d-48b1-46f4-baad-04ae160f7ccb.png?v=1614385717",
		value: "anna sui",
	},
	{
		name: "Annabelle",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Annabelle-Logo.svg/800px-Annabelle-Logo.svg.png?20130509234620",
		value: "annabelle",
	},
	{
		name: "Benefit",
		src: "https://logos-download.com/wp-content/uploads/2016/05/Benefit_logo_logotype-700x245.png",
		value: "benefit",
	},
	{
		name: "Boosh",
		src: "https://cdn.shopify.com/s/files/1/1016/3243/files/BooshLogo_2019-02-01_360x.png?v=1613727190",
		value: "boosh",
	},
	{
		name: "burt's bees",
		src: "https://logos-download.com/wp-content/uploads/2016/05/Burts_bees_logo_with_background.png",
		value: "burt's bees",
	},
	{
		name: "Butter london",
		src: "https://cdn.shopify.com/s/files/1/0555/6600/8380/files/Horiz_Logo_hires_270x.png?v=1641940278",
		value: "butter london",
	},
	{
		name: "C'est moi",
		src: "https://cdn.shopify.com/s/files/1/0081/2774/2014/files/CM_Gradient_150x.png?v=1614304950",
		value: "c'est moi",
	},
	{
		name: "Cargo Cosmetics",
		src: "https://logos-download.com/wp-content/uploads/2016/12/Cargo_Cosmetics_logo-700x250.png",
		value: "cargo cosmetics",
	},
	{
		name: "China glaze",
		src: "https://d1euuz7gg83mui.cloudfront.net/media/opti_image/webp/logo/stores/11/Logo.webp",
		value: "china glaze",
	},
	{
		name: "Clinique",
		src: "https://logos-download.com/wp-content/uploads/2016/04/Clinique_logo_logotype.jpg",
		value: "clinique",
	},
	{
		name: "Coastal Classic Creation",
		src: "https://cdn.shopify.com/s/files/1/0626/4622/3096/files/logo_1_200x.png?v=1651139939",
		value: "coastal classic creation",
	},
	{
		name: "Colourpop",
		src: "https://cdn.shopify.com/s/files/1/1338/0845/files/logo.svg?v=1661995399",
		value: "colourpop",
	},
	{
		name: "Covergirl",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CoverGirl_logo.jpg/798px-CoverGirl_logo.jpg",
		value: "covergirl",
	},
	{
		name: "Dalish",
		src: "https://cdn.shopify.com/s/files/1/0077/5340/0356/files/da_lish_NEW_logo_small_205x.png?v=1613575755",
		value: "dalish",
	},
	{
		name: "Deciem",
		src: "https://res.cloudinary.com/zoominfo-com/image/upload/w_70,h_70,c_fit/deciem.com",
		value: "deciem",
	},
	{
		name: "Dior",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/300px-Dior_Logo.svg.png?20100916160103",
		value: "dior",
	},
	{
		name: "Dr. Hauschka",
		src: "https://tukuz.com/wp-content/uploads/2020/05/dr-hauschka-skin-care-inc-logo-vector-xs.png",
		value: "dr. hauschka",
	},
	{
		name: "E.L.F.",
		src: "https://1000logos.net/wp-content/uploads/2020/09/E.l.f.-Logo-500x313.png",
		value: "e.l.f.",
	},
];

const BrandsSide1 = () => {
	return (
		<SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
			{brandslinks.map(({ src, alt, value }, index) => (
				<Link to={`/brands/${value}`} key={index}>
					<Box width="100px">
						<Image
							src={src}
							alt={alt}
							width={{ base: `100%` }}
							_hover={{
								cursor: "pointer",
							}}
						/>
					</Box>
				</Link>
			))}
		</SimpleGrid>
	);
};

export default BrandsSide1;
