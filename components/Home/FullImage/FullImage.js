import styles from '../../../styles/Home/FullImage/FullImage.module.css'



const FullImage = () => {
  return (
    <div className={styles.fullImage}>
      <div className={styles.imageBox}>
          <img src='/Assets/FullImage.png' alt='image' />
      </div>
    </div>
  )
}

export default FullImage