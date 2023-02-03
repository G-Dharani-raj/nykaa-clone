import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function SignInpage() {
	const [mail, setMail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { isAuth, token, logoutFN, setToken, setAuth } =
		React.useContext(AuthContext);
	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		console.log(mail, password);
		try {
			axios
				.post(`https://reqres.in/api/login`, {
					email: mail,
					password: password,
				})
				.then((response) => {
					if (response.status === 200) {
						setAuth(true);
						setToken(response.data.token);
						// alert("Authentication Successful!");

						// navigate("/");
						setTimeout(() => {
							navigate("/");
						}, 1000);
					} else {
						alert(response.status);
					}
					console.log(response);
				})
				.catch((error) => alert(error.response.data.error));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Sign in to your account</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						to enjoy all of our cool{" "}
						<Link color={"blue.400"}>features</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<form onSubmit={handleClick}>
						<Stack spacing={4}>
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									onChange={(e) => setMail(e.target.value)}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}
								>
									<Checkbox>Remember me</Checkbox>
									<Link color={"blue.400"}>
										Forgot password?
									</Link>
								</Stack>
								{isAuth ? (
									<Alert status="success">
										<AlertIcon />
										Authentication Successful
									</Alert>
								) : null}
								<Button
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									type={"submit"}
								>
									Sign in
								</Button>
							</Stack>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
}
