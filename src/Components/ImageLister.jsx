const ImageLister = ({images, handleClick}) => {
  return (
    <div className='gallery-container'>
        {images.map(img => {
          return <>
            <img src={img} className='gallery-img' id={img} key={img} onClick={handleClick} />
          </>
        })}
      </div>
  )
}

export default ImageLister
