import { useState } from "react";
import ImageLister from "./ImageLister";
import Modal from "./Modal";
const Gallery = ({images}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const handleClick = (e) => {
        setIsModalOpen(e.target.id);
      }
    return (
    <>
        <ImageLister images={images} handleClick={handleClick} />
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    </>
    )
}

export default Gallery;