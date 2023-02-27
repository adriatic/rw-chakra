import { Container, Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Cart from 'src/sections/cart'
import Details from 'src/sections/details'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" p={20}>
          <Details></Details>
          <Cart></Cart>
        </Flex>
      </Container>
    </>
  )
}

export default HomePage
