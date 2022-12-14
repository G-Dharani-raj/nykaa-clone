// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// const Navtwo = () => {
// 	const links = [
// 		{
// 			path: "/",
// 			text: "Home",
// 		},
// 		{
// 			path: "/dummy",
// 			text: "dummy",
// 		},
// 		{
// 			path: "/dum",
// 			text: "dum",
// 		},
// 	];
// 	return (
// 		<nav style={{ display: "flex", justifyContent: "space-around" }}>
// 			{links.map((ele) => {
// 				return (
// 					<NavLink to={ele.path} key={ele.path}>
// 						{ele.text}
// 					</NavLink>
// 				);
// 			})}
// 		</nav>
// 	);
// };

// export default Navtwo;

import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Dummy from "./Dummy";
import { Link } from "react-router-dom";
import Brands from "./Brands";

export default function Navtwo() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Brands />
		</>
	);
}
