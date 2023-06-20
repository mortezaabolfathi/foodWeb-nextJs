import style from "./HomePage.module.css"
import Banner from "./../../modules/Banner/Banner"
import Attributes from './../../modules/Attributes/Attributes';
import Definition from './../../modules/Definition/Definition';
import Companies from "../../modules/Companies/Companies"; 
import Instruction from "../../modules/Instruction/Instruction";
import Guide from "../../modules/Guide/Guide";
import Restriction from "../../modules/Restriction/Restrictions"
const HomePage = () => {
  return (
    <div className={style.container}>
        <Banner/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Instruction/>
        <Guide/>
        <Restriction/>
    </div>
  )
}

export default HomePage