import styles from '../../../styles/Home/Menu/Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.heading}>
            <p>PICK YOUR TASTE</p>
            <h2>EXPLORE MENU</h2>
        </div>
        
        <div className={styles.box}> 
            <div className={styles.food}>
                    <h1>Food name</h1>
            </div>
            
        </div>
    </div>
  )
}

export default Menu