import MenuPage from '../../components/templates/menu/MenuPage'

const Menu = ({data}) => {
    console.log(data)
  return (
    <div>
        <MenuPage data={data}/>
    </div>
  )
}

export default Menu

export async function getStaticProps () {
    const res = await fetch("http://localhost:4000/data")
    const data = await res.json()
    return {
        props:{data}
    }
}