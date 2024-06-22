import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import URLShortenerForm from './components/URLShortenerForm'
import Footer from './components/Footer'

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Container maxW="container.xl" flex="1">
        <VStack spacing={8} mt={16} mb={8}>
          <Heading as="h1" size="2xl" color="brand.600">
            URL Shortener
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Shorten your long URLs with just one click!
          </Text>
          <URLShortenerForm />
        </VStack>
      </Container>
      <Footer />
    </Box>
  )
}

export default App
