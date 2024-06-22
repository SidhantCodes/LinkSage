import { useState } from 'react'
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import axios from 'axios'

function URLShortenerForm() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post('http://localhost:5000/shorten', { originalUrl: url })
      setShortUrl(response.data.shortUrl)
      toast({
        title: 'URL shortened successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error shortening URL',
        description: error.response?.data?.error || 'An unexpected error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    toast({
      title: 'Copied to clipboard',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Box width="100%" maxWidth="600px">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            placeholder="Enter your long URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="lg"
            borderColor="brand.300"
            _hover={{ borderColor: 'brand.400' }}
            _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #0a84ff' }}
          />
          <Button
            type="submit"
            colorScheme="brand"
            size="lg"
            width="100%"
            isLoading={isLoading}
          >
            Shorten URL
          </Button>
        </VStack>
      </form>
      {shortUrl && (
        <Box mt={6} p={4} borderRadius="md" borderWidth={1} borderColor="brand.200">
          <Text mb={2} fontWeight="bold">
            Your shortened URL:
          </Text>
          <InputGroup size="md">
            <Input
              value={shortUrl}
              isReadOnly
              pr="4.5rem"
              borderColor="brand.300"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleCopy} colorScheme="brand">
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
    </Box>
  )
}

export default URLShortenerForm
