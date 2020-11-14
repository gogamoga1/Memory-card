import React from 'react'


const PhotoCell = ({index, incscrore}) => {

  return (
    <div  className="card-cell"  data-id={index} onClick={() => incscrore()}>
      <div className='img-container'> <img src={require(`../images/${index}.jpg`)['default']} alt='card' /> </div>
       <p>ID: {index}</p>
    </div>
  )
}

export default PhotoCell
