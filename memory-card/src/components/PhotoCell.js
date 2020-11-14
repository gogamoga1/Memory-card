import React from 'react'


const PhotoCell = ({index, incscrore}) => {

  return (
    <div  className="photo-cell"  data-id={index} onClick={() => incscrore()}>
      <div className='img-container'> <img src={require(`../images/${index}.jpg`)['default']} alt="Logo" /> </div>
       <p>ID: {index}</p>
    </div>
  )
}

export default PhotoCell
