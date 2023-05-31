import { Container } from '@mui/material'
import Hero from '../components/common/Home/Hero'
import Headlines from '../components/common/Home/Headlines'
import Subscribe from '../components/common/Home/Subscribe'

const Home = () => {
  return (
    <main>
     <Container>
        <Hero />
        <Headlines />
        <Subscribe />
    </Container>
    </main>
  )
}

export default Home