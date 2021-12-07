import React from "react";
import "../styles/LinksBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, Stack } from "@chakra-ui/react";


const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      className="linkBarContainer"
    >
      <Stack
        spacing={2}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column"]}
        pt={[4, 4, 0, 0]}
      >
        <a href="https://www.github.com/mattpassarelli">
          <FontAwesomeIcon icon={faGithub} className="link" size={"lg"} />
        </a>

        <a href="https://www.linkedin.com/in/matthew-passarelli/">
          <FontAwesomeIcon icon={faLinkedin} className="link" size={"lg"} />
        </a>

        <a href="https://www.youtube.com/channel/UCZE4xIPZpJBAVwituwfteGw">
          <FontAwesomeIcon icon={faYoutube} className="link" size={"lg"} />
        </a>
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

//TODO: Use the Header as a reference for scaling
const LinksBar = (props) => {
  return (
    <NavBarContainer {...props}>
      <MenuLinks />
    </NavBarContainer>
  );
};

export default LinksBar;
