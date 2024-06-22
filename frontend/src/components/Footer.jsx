import { Box, Text, Link } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" width="100%" py={4} bg="brand.50" textAlign="center">
      <Text fontSize="sm" color="gray.600">
        © 2025 URL Shortener. Made by {'Miit 😄'}
        <Link href="https://github.com/yourusername" color="brand.500" isExternal>
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
