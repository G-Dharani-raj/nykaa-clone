import {
	Box,
	Heading,
	Radio,
	RadioGroup,
	Stack,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { cats } from "./Categories";
import "./sidebar.css";

const Sidebar = ({ type, setType }) => {
	const [sticky, setSticky] = React.useState(false);
	const [search, setParams] = useSearchParams();
	React.useEffect(() => {
		const handleScroll = () => {
			setSticky(window.scrollY > 200);
			// console.log(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
	const handleChange = (value) => {
		setType(value);
	};
	return (
		<Box
			height="500px"
			className={`sidebar ${sticky ? "sticky" : ""}`}
			border="1px solid black"
		>
			<VStack>
				<Heading>Categories</Heading>
				<RadioGroup onChange={(e) => handleChange(e)}>
					<Stack direction="column">
						{cats.map(({ text, value }, i) => {
							return (
								<Radio value={value} key={i}>
									{text}
								</Radio>
							);
						})}
					</Stack>
				</RadioGroup>
			</VStack>
		</Box>
	);
};

export default Sidebar;
