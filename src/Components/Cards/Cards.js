import React from 'react'
import styles from './cards.module.scss'
import bookmark from '../../assets/bookmark.svg'
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../../store/quoteReducer"
const Cards = (props) => {
  const dispatch = useDispatch()
  const handleAddBookmark = () => {
    dispatch(add(props?.card))
  }
  return ( 
      <div className={styles.quoteDiv}>
        {props?.card ? 
        <>
        <p className=''> {props?.card?.content}</p>
        <p className=''> - {props?.card?.author}</p>
        {props?.bookmarkIcon &&<img  src={bookmark} className={`${styles.bookmarkIcon}`} 
        onClick={handleAddBookmark}
        alt="bookmark" title="Add to Bookmark"/>  }
        </>
        
        :<h1> No Quotes Found</h1>}
      </div>
  )
}

export default Cards