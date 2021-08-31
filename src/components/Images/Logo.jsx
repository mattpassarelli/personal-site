import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        {/* TODO: Do I want some logo? */}
        Hi There
      </Text>
    </Box>
  );
}
