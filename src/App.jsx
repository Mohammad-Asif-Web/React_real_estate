import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
function App() {

  return (
    <div>
      <Header />
      {/* imported CountUp from 'react-countup'; */}
      <Hero />
      <Companies />
      {/* imported {Swiper, SwiperSlide, useSwiper}  from 'swiper/react' */}
      <Residencies />
    </div>
  )
}

export default App
