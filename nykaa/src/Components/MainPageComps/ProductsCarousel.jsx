import React, { Component } from "react";
import { dummy_data } from "../Dummy";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductsCarousel.module.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Product from "../../Components/Product";

class CustomSlide extends Component {
	render() {
		const { index, ele } = this.props;
		console.log(ele);
		return (
			// <div className={styles.card} style={{ margin: "0 10px" }}>
			// 	<div className={styles.cardTop}>
			// 		<img src={ele.api_featured_image} alt={ele.name} />
			// 	</div>
			// 	<div className={styles.cardBottom}>
			// 		<h1>{ele.name}</h1>
			// 	</div>
			// </div>
			<Product {...ele} />
		);
	}
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<IconButton
			isRound={true}
			icon={<BiRightArrowAlt />}
			onClick={onClick}
			position="absolute"
			top={"40%"}
			right={"0%"}
			zIndex={"2"}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<IconButton
			isRound={true}
			icon={<BiLeftArrowAlt />}
			onClick={onClick}
			position="absolute"
			top={"40%"}
			zIndex={"2"}
		/>
	);
}

const ProductsCarousel = () => {
	var settings = {
		dots: !true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div style={{ width: "80%", margin: "auto" }}>
			<Slider {...settings}>
				{dummy_data.map((ele, index) => {
					return <CustomSlide index={index} ele={ele} key={index} />;
				})}
			</Slider>
		</div>
	);
};

export default ProductsCarousel;
