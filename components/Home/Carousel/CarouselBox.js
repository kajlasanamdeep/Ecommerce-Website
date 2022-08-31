import styles from '../../../styles/Home/Carousel/CarouselBox.module.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';




const CarouselBox = () => {
  return (
    <div className={styles.carouselBox} >
        <div className={styles.info}>
            <div className={styles.left}>
                <KeyboardDoubleArrowLeftIcon  sx={{cursor : 'pointer' }} />

            </div>
            <div className={styles.mid}>
                <h1>PIZZA NAME</h1>
                <p>uyvde hgdwe gyegwoe</p>

            </div>
            <div className={styles.right}>
                <KeyboardDoubleArrowRightIcon sx={{cursor : 'pointer'}} />
            </div>  

        </div>
        
    </div>
  )
}

export default CarouselBox