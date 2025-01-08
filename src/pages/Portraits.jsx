import port1 from '../assets/portraits/port1.webp'
import port2 from '../assets/portraits/port2.webp'
import port3 from '../assets/portraits/port3.webp'
import port4 from '../assets/portraits/port4.webp'
import port5 from '../assets/portraits/port5.webp'
import port6 from '../assets/portraits/port6.webp'
import port7 from '../assets/portraits/port7.webp'
import port8 from '../assets/portraits/port8.webp'
import port9 from '../assets/portraits/port9.webp'
import Gallery from '../Components/Gallery'
const Portraits = () => {
  const images = [port1, port2, port3, port4, port5, port6, port7, port8, port9];
  return (
    <>
      <Gallery images={images}/>
    </>
  )
}

export default Portraits
