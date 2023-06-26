import React from 'react'
import { useRouter } from 'next/router'
import DetailsPage from '../../components/templates/DetailsPageFood/DetailsPage'
const Details = (props) => {

  const {data} = props 
  const route = useRouter()
  if(route.Fallback){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <DetailsPage {...data}/>
    </div>
  )
}

export default Details;

export async function getStaticPaths() {
  const res  = await fetch("http://localhost:4000/data")
  const data = await res.json()
  // const data = json.slice(0,5)

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback :false
  }
}

export async function getStaticProps(context){
  const {params} = context
  console.log(params)
  const res = await fetch(`http://localhost:4000/data/${params.id}`)
  const data = await res.json()
  return {
    props:{data}
  }
}

