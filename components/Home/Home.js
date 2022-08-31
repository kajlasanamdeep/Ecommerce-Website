import FullImage from './FullImage/FullImage';
import Styles from '../../styles/Home/Home.module.css'
import CarouselBox from "./Carousel/CarouselBox";
import Menu from './Menu/Menu';
import TopFood from './TopFood/TopFood';


const Home = () => {
  return (
    <>
    <div className={Styles.home}>
        <CarouselBox />
        <Menu />
        <FullImage />
        <TopFood />
    </div>
    </>
  )
}

export default Home