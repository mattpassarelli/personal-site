import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import Logo from "./Images/Logo";
import "../styles/Header.css";
import { EMAIL } from "../utils/Constants";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["row", "column", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Link className="menuItemLinks" style={{ textDecoration: "none" }}>
          <Text display="block" fontSize={"xl"}>
            My Projects
          </Text>
        </Link>

        <Link className="menuItemLinks" style={{ textDecoration: "none" }}>
          <Text display="block" fontSize={"xl"}>
            About Me
          </Text>
        </Link>

        <Link
          className="menuItemLinks"
          href={`mailto:${EMAIL}`}
          isExternal
          style={{ textDecoration: "none" }}
        >
          <Text display="block" fontSize={"xl"}>
            Contact Me
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
