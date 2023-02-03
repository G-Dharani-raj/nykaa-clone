import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
	Image,
	Badge,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import BrandsSide1 from "./BrandsSide1";
import Categories from "./Categories";
import { Link as Rink, Navigate, useNavigate } from "react-router-dom";
import SignInpage from "../Pages/SignInpage";
import { AuthContext } from "../Contexts/AuthContext";
import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();
	const navigate = useNavigate();
	const { isAuth, token, logoutFN, setToken, setAuth } =
		useContext(AuthContext);
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	let cartlen = cart.length;
	const [note, setNote] = React.useState(false);
	React.useEffect(() => {
		if (cartlen > 0) {
			setNote(true);
		} else {
			setNote(false);
		}
	}, [cartlen]);

	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon w={3} h={3} />
							) : (
								<HamburgerIcon w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "center", md: "start" }}
				>
					<Image
						src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo-700x229.png"
						alt="icon"
						// style={{ width: "5%" }}
						width={{
							base: "50%",
							sm: "50%",
							md: "10%",
							lg: "5%",
						}}
						_hover={{
							cursor: "pointer",
						}}
						onClick={() => {
							navigate("/");
						}}
					/>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				{!isAuth ? (
					<Stack
						flex={{ base: 1, md: 0 }}
						justify={"flex-end"}
						direction={"row"}
						spacing={6}
					>
						<Button
							as={"a"}
							fontSize={"sm"}
							fontWeight={400}
							variant={"link"}
							onClick={() => navigate("/signin")}
							_hover={{
								cursor: "pointer",
							}}
						>
							Sign In
						</Button>
						<Button
							display={{ base: "none", md: "inline-flex" }}
							fontSize={"sm"}
							fontWeight={600}
							color={"white"}
							bg={"black"}
							// variant={"link"}
							href={"#"}
							onClick={() => navigate("/signup")}
							_hover={{
								bg: "white",
								color: "black",
								outline: "1px solid black",
							}}
						>
							Sign Up
						</Button>
					</Stack>
				) : (
					<Button
						display={{ base: "none", md: "inline-flex" }}
						fontSize={"sm"}
						fontWeight={600}
						color={"white"}
						bg={"pink.400"}
						// variant={"link"}
						href={"#"}
						onClick={() => {
							logoutFN();
							navigate("/");
						}}
						_hover={{
							bg: "pink.300",
						}}
					>
						Sign Out
					</Button>
				)}
				<Button
					display={{ base: "none", md: "inline-flex" }}
					fontSize={"sm"}
					fontWeight={800}
					color={"black"}
					// variant={"link"}
					href={"#"}
					onClick={() => navigate("/cart")}
					_hover={{
						bg: "black",
						color: "white",
					}}
				>
					<HiOutlineShoppingCart />
					{note ? (
						<div
							style={{
								height: "8px",
								width: "8px",
								borderRadius: "100%",
								backgroundColor: "red",
								position: "absolute",
								top: "15%",
								left: "60%",
							}}
						>
							<p style={{ visibility: "hidden" }}>1</p>
						</div>
					) : null}
				</Button>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			<Box>
				<Popover
					trigger={"hover"}
					placement={"bottom-start"}
					width="500px"
				>
					<PopoverTrigger>
						<Rink to="/brands">Brands</Rink>
					</PopoverTrigger>

					<PopoverContent
						border={0}
						boxShadow={"xl"}
						bg={popoverContentBgColor}
						p={4}
						rounded={"xl"}
						// minW={"sm"}
						// size={"500px"}
						minW={{ base: "100%", lg: "max-content" }}
					>
						<BrandsSide1 />
					</PopoverContent>
				</Popover>
			</Box>
			<Box>
				<Popover trigger={"hover"} placement={"bottom-start"}>
					<PopoverTrigger>
						<Rink to="/dummy">Categories</Rink>
					</PopoverTrigger>

					<PopoverContent
						border={0}
						boxShadow={"xl"}
						bg={popoverContentBgColor}
						p={4}
						rounded={"xl"}
						// minW={"sm"}
						minW={{ base: "100%", lg: "max-content" }}
					>
						<Categories />
					</PopoverContent>
				</Popover>
			</Box>
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{
						opacity: "100%",
						transform: "translateX(0)",
					}}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon
						color={"pink.400"}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: "0!important" }}
			>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "Inspiration",
		children: [
			{
				label: "Explore Design Work",
				subLabel: "Trending Design to inspire you",
				href: "#",
			},
			{
				label: "New & Noteworthy",
				subLabel: "Up-and-coming Designers",
				href: "#",
			},
		],
	},
	{
		label: "Find Work",
		children: [
			{
				label: "Job Board",
				subLabel: "Find your dream design job",
				href: "#",
			},
			{
				label: "Freelance Projects",
				subLabel: "An exclusive list for contract work",
				href: "#",
			},
		],
	},
	{
		label: "Learn Design",
		href: "#",
	},
	{
		label: "Hire Designers",
		href: "#",
	},
];
