import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
	const brands = [
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
		{
			name: "Essie",
			src: "https://upload.wikimedia.org/wikipedia/commons/5/58/Essie_logo.png?20130314172447",
			value: "essie",
		},
		{
			name: "Fenty",
			src: "https://vtlogo.com/wp-content/uploads/2020/11/fenty-vector-logo-small.png",
			value: "fenty",
		},
		{
			name: "Glossier",
			src: "https://cdn.worldvectorlogo.com/logos/glossier-1.svg",
			value: "glossier",
		},
		{
			name: "Green people",
			src: "https://cdn.shopify.com/s/files/1/0282/3936/4141/files/logo_colorido.png?v=1635275745",
			value: "green people",
		},
		{
			name: "Iman",
			src: "https://cdn.shopify.com/s/files/1/0869/6800/files/logo_iman_410x.png?v=1614299800",
			value: "iman",
		},
		{
			name: "L'oreal",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/800px-L%27Or%C3%A9al_logo.svg.png?20130628084147",
			value: "l'oreal",
		},
		{
			name: "Lotus Cosmetics USA",
			src: "https://cdn.shopify.com/s/files/1/0428/8063/0937/files/logo_e3a67a8c-6a4d-48a0-909e-4c06938a9c8b_140x.png?v=1613775273",
			value: "lotus cosmetics usa",
		},
		{
			name: "Maia's Mineral Galaxy",
			src: "https://www.maiasminerals.com/v/vspfiles/templates/264/images/template/header_bg.png",
			value: "maia's mineral galaxy",
		},
		{
			name: "Marcelle",
			src: "https://marcelle.com/marcelle-static/marcelle-logo.png",
			value: "marcelle",
		},
		{
			name: "Marienatie",
			src: "https://cdn.shopify.com/s/files/1/0347/5705/t/2/assets/logo.png?v=114685556768707899361414711487",
			value: "marienatie",
		},
		{
			name: "Maybelline",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maybelline-Logo.svg/241px-Maybelline-Logo.svg.png?20220511204606",
			value: "maybelline",
		},
		{
			name: "Milani",
			src: "https://logovectordl.com/wp-content/uploads/2021/03/milani-cosmetics-logo-vector.png",
			value: "milani",
		},
		{
			name: "Nyx",
			src: "https://1000logos.net/wp-content/uploads/2021/04/NYX-logo-500x281.png",
			value: "nyx",
		},
		{
			name: "Revlon",
			src: "https://logodix.com/logo/2022837.png",
			value: "revlon",
		},
		{
			name: "Sinful Colours",
			src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Sinfulcolors_logo_4_1493407955.png",
			value: "sinful colours",
		},
		{
			name: "Zorah",
			src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/669f324914149.5d9df3b9e710f.jpg",
			value: "zorah",
		},
		{
			name: "zorah biocosmetiques",
			src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/669f324914149.5d9df3b9e710f.jpg",
			value: "zorah biocosmetiques",
		},
	];

	return (
		<SimpleGrid columns={[1, 2, 3, 4]} spacing={5} marginTop="100px">
			{brands.map(({ name, src, value }, index) => (
				<Link to={`/brands/${value}`} key={index}>
					<Box align="center">
						<Image
							src={src}
							alt={name}
							width={{ base: "50%" }}
							_hover={{
								cursor: "pointer",
							}}
						/>

						<Text padding="20px">{name}</Text>
					</Box>
				</Link>
			))}
		</SimpleGrid>
	);
};

export default BrandsPage;
