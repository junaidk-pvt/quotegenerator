import React from 'react'
import styles from './cards.module.scss'
import bookmark from '../../assets/bookmark.svg'
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../../store/quoteReducer"
const Cards = (props) => {
  const dispatch = useDispatch()
  const { quotes } = useSelector((state) => state.quotes)
  const handleAddBookmark = (product) => {
    dispatch(add(props?.card))
  }
  const items = useSelector((state) => state?.quotes?.bookmark)
  console.log('items', items)
  return ( 
      <div className={styles.quoteDiv}>
        <p className=''> {props?.card?.content}</p>
        <p className=''> - {props?.card?.author}</p>
        {props?.bookmarkIcon &&<img  src={bookmark} className={`${styles.bookmarkIcon}`} 
        onClick={handleAddBookmark}
        alt="bookmark" title="Add to Bookmark"/>  }
      </div>
  )
}

export default Cards