import orig1 from '../assets/originals/orig1.jpg'
import orig2 from '../assets/originals/orig2.jpg'
import orig3 from '../assets/originals/orig3.jpg'
import orig4 from '../assets/originals/orig4.jpg'
import orig5 from '../assets/originals/orig5.jpg'
import orig6 from '../assets/originals/orig6.jpg'
import orig7 from '../assets/originals/orig7.jpg'
import orig8 from '../assets/originals/orig8.jpg'
import orig9 from '../assets/originals/orig9.jpg'
import { useState } from 'react'
import Modal from '../Components/Modal'
import ImageLister from '../Components/ImageLister'
const Originals = () => {
  const images = [orig1, orig2, orig3, orig4, orig5, orig6, orig7, orig8, orig9];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currImg, setCurrImg] = useState(orig1)
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
      <ImageLister images={images} handleClick={handleClick}/>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal} img={currImg} />
      </div>
    </>
  )
}

export default Originals
