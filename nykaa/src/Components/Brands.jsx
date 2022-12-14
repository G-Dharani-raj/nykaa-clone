import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Brands() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				variant="ghost"
				mx={1}
				py={[1, 2, 2]}
				px={4}
				borderRadius={5}
				_hover={{ bg: "gray.100" }}
				aria-label="Courses"
				fontWeight="normal"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				Brands {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
			</MenuButton>
			<MenuList
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				display="flex"
			>
				<MenuItem>Menu Item 1</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
				<MenuItem>Menu Item 3</MenuItem>
			</MenuList>
		</Menu>
	);
}
