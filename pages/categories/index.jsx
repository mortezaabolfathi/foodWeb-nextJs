import CategoriesPage from '../../components/templates/Categories/CategoriesPage'

const Categories = ({data}) => {
  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  )
}

export default Categories

export async function getServerSideProps(context) {
  const { query } = context
  const { difficulty, time } = query
  const res = await fetch("http://localhost:4000/data")
  const data = await res.json()
  const filterData = data.filter((item) => {
    const difficultyResult = item.details.filter((details) => details.Difficulty && details.Difficulty === difficulty);
    const timeResult = item.details.filter((detail)=>{
      const cookingTime = detail["Cooking Time"] || ""
      const [timeDetails] = cookingTime.split(" ");
      if(time === "more" && timeDetails && +timeDetails <= 30){
        return detail
      } else if(time === "more" && +timeDetails>30){
        return detail
      }
    })
    if(time && difficulty && difficultyResult.length && timeResult.length){
      return time;
        }
      if(!time && difficulty && difficultyResult.length && timeResult.length){
        return time
      }
      if(time && !difficulty && difficultyResult.length && timeResult.length){
        return time
      }
  })
  return {
    props: {
      data : filterData
    }
  }
}