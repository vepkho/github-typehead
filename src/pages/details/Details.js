import React from 'react'
<<<<<<< HEAD

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
=======
import styles from './Details.module.css'
import { useSelector } from 'react-redux';


const Details = () => {
  const infoList = useSelector(state => state.info.infoList)
  console.log(infoList)

  return (
    <div className={styles.Container}>
      {infoList.map(data => (
        <div key={data.id}>
          <div className={styles.Owner}>
            <img src={data.image} alt='owner' className={styles.Avatar}/>
            <h2>Owner - {data.owner}</h2>
          </div>
          <h3>Repository Name - {data.name}</h3>
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
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