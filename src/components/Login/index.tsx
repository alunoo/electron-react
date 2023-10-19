import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

const Login = (): JSX.Element => {
  return (
    <Box
    //   maxW="sm"
    //   p={4}
    //   borderWidth={1}
    //   borderRadius="md"
    //   boxShadow="md"
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}

    >
      <Flex
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        borderRadius={"1rem"}
        width={"20%"}
        justifyContent={"center"}
        height={"35%"}
        padding={"2rem"}
        boxShadow={"1rem 1rem 2.5rem 0rem"}
      >
        <Text fontSize="2rem" fontWeight="bold" mb={4}>
          Login
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Seu email" padding={"0.6rem"} width={"20rem"} borderRadius={"0.5rem"}/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="Sua senha" padding={"0.6rem"} width={"20rem"} borderRadius={"0.5rem"}/>
        </FormControl>

        <Button mt={4} colorScheme="teal" width="full" padding={"0.6rem 2rem"} borderRadius={"0.5rem"}>
          Entrar
        </Button>

        <Text mt={2}>
          <Link color="teal.500" href="#">
            Esqueceu a senha?
          </Link>
        </Text>

        <Text mt={2}>
          Ainda não tem uma conta?{" "}
          <Link color="teal.500" href="#">
            Criar novo usuário
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
