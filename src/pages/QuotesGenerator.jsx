import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Cards from '../Components/Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuotes } from '../store/quoteReducer'
import { getTags } from '../services/service'
import Spinner from '../Components/Spinner/Spinner'
const QuotesGenerator = () => {
  const dispatch = useDispatch()
  const { quote } = useSelector((state) => state.quotes)
  const [tagsOptions, setTagsOptions] = useState([])
  const [tag, setTag] = useState("")
  const [loader, setLoader] = useState(false)
  const handleNextQuote = async(params) => {
    setLoader(true)
    setTag(params)
    await dispatch(fetchQuotes(params));
    setLoader(false)
  }
  console.log('loader', loader)
  const getTagsAPI = async () => {
    try {
      setLoader(true)
      const res = await getTags()
      const options = res?.map((op) => {
        return {
          id: op?._id,
          label: op?.name,
          value: op?.slug,
        };
      });
      setTagsOptions(options)
      setLoader(false)

    } catch (error) {

    }
  }
  const fetchQuotesAPI = ()=>{
    setLoader(true)
    dispatch(fetchQuotes(tag));
    setLoader(false)
  }
  useEffect(() => {
    fetchQuotesAPI()
    getTagsAPI()
  }, [])
  return (
    loader ? <Spinner /> :
      <div className={styles.quotemainDiv}>
        <Cards card={quote} bookmarkIcon={true} />
        <div className={styles.btnDiv}>
          <select onChange={(e) => { handleNextQuote(e?.target?.value) }}>
            <option value=""> Select All</option>
            {tagsOptions?.map((option) => {
              return <option key={option?.id} value={option?.value}> {option?.label}</option>
            })}
          </select>
          <button type='submit' className={styles.nextBtn} onClick={() => { handleNextQuote(tag) }}> Next Quote </button>
        </div>
      </div>

  )
}

export default QuotesGenerator