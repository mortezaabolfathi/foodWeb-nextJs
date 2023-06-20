import Card from "../../modules/Card"
import styles from "./MenuPage.module.css"
const MenuPage = ({data}) => {
    //  console.log("data is template", data)
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
        </div>
        
    </div>
  )
}

export default MenuPage