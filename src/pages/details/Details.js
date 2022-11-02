import React from 'react'

import { useSelector } from 'react-redux';

import Navigation from '../../components/navigation/Navigation';

import styles from './Details.module.css'

const Details = () => {
  const infoList = useSelector(state => state.info.infoList)

  return (
    <div>
      <Navigation/>
      {infoList.map(data => (
        <div key={data.id} className={styles.Card}>
          <div className={styles.Owner}>
            <img src={data.image} alt='owner' className={styles.Avatar}/>
            <h2>{data.owner}</h2>
          </div>
          <h3>{data.name}</h3>
          <p className={styles.Description}>{data.description}</p>
          <div className={styles.Details}>
            <p>Visibility - {data.visibility}</p>
            <p>Watchers - {data.watchers}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Details