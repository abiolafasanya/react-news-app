import { Container } from '@mui/material'
import Banner from '../components/common/Home/Banner'
import Featured from '../components/common/Home/Featured'
import Headlines from '../components/common/Home/Headlines'
import Subscribe from '../components/common/Home/Subscribe'

const Home = () => {
  return (
    <main>
     <Container>
        <Banner />
        <Featured />
        <Headlines />
        <Subscribe />
    </Container>
    </main>
  )
}

export default Home