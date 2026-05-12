import Booking from './sections/Booking'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import About from './sections/About'

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <About />
      <Booking />
    </div>
  )
}

export default Home