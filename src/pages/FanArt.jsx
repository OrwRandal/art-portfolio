import fanart1 from '../assets/fan-arts/fanart1.webp'
import fanart2 from '../assets/fan-arts/fanart2.webp'
import fanart3 from '../assets/fan-arts/fanart3.webp'
import fanart4 from '../assets/fan-arts/fanart4.webp'
import fanart5 from '../assets/fan-arts/fanart5.webp'
import fanart6 from '../assets/fan-arts/fanart6.webp'
import fanart7 from '../assets/fan-arts/fanart7.webp'
import fanart8 from '../assets/fan-arts/fanart8.webp'
import fanart9 from '../assets/fan-arts/fanart9.webp'
import Gallery from '../Components/Gallery'
const FanArt = () => {
  const images = [fanart1, fanart2, fanart3, fanart4, fanart5, fanart6, fanart7, fanart8, fanart9];
  return (
    <Gallery images={images}/>
  )
}

export default FanArt
