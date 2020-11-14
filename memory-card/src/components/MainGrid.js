import React, { useState, useEffect } from 'react'
import PhotoCell from './PhotoCell'
import uniqid from "uniqid";



const MainGrid = ({ setCurScore, setBestScore }) => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    let lastIDArray = []
    let currScoreLocal = 0
    let bestScoreLocal = 0
   
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const increaseScore = (id) => {
      if (!lastIDArray.includes(id)) {
        lastIDArray.push(id)
        currScoreLocal++
        setCurScore((prevScore) => prevScore + 1)
        
      } else {
        lastIDArray = []
        if (currScoreLocal > bestScoreLocal) {
          setBestScore(currScoreLocal)
          bestScoreLocal = currScoreLocal
        }
        currScoreLocal = 0
        setCurScore(0)
      }
      setPhotos((prevArray) => {
        const tempArray = [...prevArray]
        shuffleArray(tempArray)
        return tempArray
      })
    }
    const photosArray = [...Array(12)].map((el, index) => {
      return <PhotoCell index={index + 1} key={uniqid()} incscrore={() => increaseScore(index + 1)} />
    })
    setPhotos(photosArray)
  }, [setCurScore, setBestScore])

  return (
    <div className="flex-container">
      {photos.map((obj, idx) => {
        return obj
      })}
    </div>
  )
}

export default MainGrid
