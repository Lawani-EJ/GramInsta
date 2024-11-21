import React from 'react'
import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react'
import AuthForm from '../../components/ui/AuthForm/Authform'

const AuthPage = () => {
  return (
<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
  {/* the container is used to constrain the the content's widht to the current breakpoint while keeping it fluid  */}
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					{/* Left hand-side */}
					<Box display={{ base: "none", md: "block" }}>
						<Image src='/auth.png' h={650} alt='Phone img' />
					</Box>
					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
            <AuthForm />
						{/* <AuthForm /> */}
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
							<Image src='/playstore.png' h={"10"} alt='Playstore logo' />
							<Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
  )
}

export default AuthPage
