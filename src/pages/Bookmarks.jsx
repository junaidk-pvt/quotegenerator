import React from 'react'
import Cards from '../Components/Cards/Cards'
import styles from './page.module.scss'
import { useSelector } from 'react-redux'

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state?.quotes?.bookmark)
  return (
    <div className={styles.quotemainDiv}>
      {bookmarks.length > 0 ?
        bookmarks.map((card) => {
          return <Cards card={card} bookmarkIcon={false} />
        })
        : <h1> No Bookmark Added Yet</h1>}
    </div>
  )
}

export default Bookmarks