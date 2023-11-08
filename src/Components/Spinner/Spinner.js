import React from 'react'
import styles from './spinner.module.scss'
import { memo } from 'react'

const Spinner = () => {
  return (
    <div className={styles.spinnerBackground}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default memo(Spinner)
