import React from 'react'
import styles from './cards.module.scss'
import bookmark from '../../assets/bookmark.svg'
import deleteIcon from '../../assets/delete.svg'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from "../../store/quoteReducer"
const Cards = (props) => {
  const dispatch = useDispatch()
  const handleAddBookmark = () => {
    dispatch(add(props?.card))
  }
  const handleRemoveBookmark = () => {
    dispatch(remove(props?.card))
  }
  return ( 
      <div key={props?.card?._id} className={styles.quoteDiv}>
        {props?.card ? 
        <>
        <p> {props?.card?.content}</p>
        <p > - {props?.card?.author}</p>
        {props?.bookmarkIcon? <img  src={bookmark} className={`${styles.bookmarkIcon}`} 
        onClick={handleAddBookmark}
        alt="bookmarkAdd" title="Add to Bookmark"/>:
          <img  src={deleteIcon} className={`${styles.bookmarkIcon}`} 
        onClick={handleRemoveBookmark}
        alt="bookmarkRemove" title="Remove from Bookmark"/>}
        </>
        
        :<h1> No Quotes Found</h1>}
      </div>
  )
}

export default Cards