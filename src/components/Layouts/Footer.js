import {
  Text,
  Stack,
  HStack,
  Box,
  Container,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={5}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={{ base: "column", md: "row" }} fontWeight={"medium"}>
          <Text>
            &copy; 2024 & All Right Reserved by
            <Text
              as={"a"}
              href={"https://pk.linkedin.com/company/workwith-hitechiez"}
              target={"_blank"}
              color={"blue.600"}
            >
              hitechiez.
            </Text>
            & Designed By
          </Text>
          <Text
            as={"a"}
            href={"https://pk.linkedin.com/in/iabdul-hannan"}
            target={"_blank"}
            color={"blue.600"}
          >
            Abdul Hannan Ghaznavi
          </Text>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <IconButton
            isRound="true"
            as={"a"}
            href={"https://github.com/ftHannan"}
            target="_blank"
            bg={"gray.300"}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            isRound="true"
            as={"a"}
            href={"https://www.linkedin.com/in/abbdul-hannan/"}
            target="_blank"
            colorScheme={"blue"}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            isRound="true"
            as={"a"}
            href={"#"}
            target="_blank"
            colorScheme={"pink"}
          >
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
