import fanart1 from '../assets/fan-arts/fanart1.jpg'
import fanart2 from '../assets/fan-arts/fanart2.jpg'
import fanart3 from '../assets/fan-arts/fanart3.jpg'
import fanart4 from '../assets/fan-arts/fanart4.jpg'
import fanart5 from '../assets/fan-arts/fanart5.jpg'
import fanart6 from '../assets/fan-arts/fanart6.jpg'
import fanart7 from '../assets/fan-arts/fanart7.jpg'
import fanart8 from '../assets/fan-arts/fanart8.jpg'
import fanart9 from '../assets/fan-arts/fanart9.jpg'
import { useState } from 'react'
import ImageLister from '../Components/ImageLister'
import Modal from '../Components/Modal'
const FanArt = () => {
  const images = [fanart1, fanart2, fanart3, fanart4, fanart5, fanart6, fanart7, fanart8, fanart9];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currImg, setCurrImg] = useState(fanart1)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (e) => {
    setCurrImg(e.target.id)
    openModal()
  }
  return (
    <>
      <ImageLister images={images} handleClick={handleClick} />
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal} img={currImg} />
      </div>
    </>
  )
}

export default FanArt
