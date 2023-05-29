import { Container } from '@mui/material'
import Banner from '../components/common/Home/Banner'
import Featured from '../components/common/Home/Featured'
import Headlines from '../components/common/Home/Headlines'

const Home = () => {
  return (
    <main>
     <Container>
        <Banner />
        <Featured />
        <Headlines />
    </Container>
    </main>
  )
}

export default Home