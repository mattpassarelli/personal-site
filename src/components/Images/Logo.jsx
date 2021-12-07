import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link
        as={ReactRouterLink}
        to="/"
        replace
        className="menuItemLinks"
        style={{ textDecoration: "none" }}
      >
        <Text fontSize="lg" fontWeight="bold">
          {/* TODO: Do I want some logo? */}
          Hi There
        </Text>
      </Link>
    </Box>
  );
}
