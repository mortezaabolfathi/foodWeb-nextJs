import React, { useEffect, useState } from 'react'
import styles from "./CategoriesPage.module.css"
import { useRouter } from 'next/router'
import Card from '../../modules/Card'
const CategoriesPage = ({ data }) => {
   
    const route = useRouter()
    
    const [query, setQuery] = useState({ difficulty: "", time: "" })

    useEffect(() => {
        const { difficulty, time } = route.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time });
        }
    }, [])

    const changeHandler = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    const searchHandler = () => {
        route.push({
            pathname: '/categories',
            query
        })
    }


    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select
                        name="difficulty"
                        onChange={changeHandler}
                    >
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select
                        name="time"
                        onChange={changeHandler}
                    >
                        <option value="">Cooking Time</option>
                        <option value="more">More than 30 min</option>
                        <option value="less">Less than 30 min</option>
                    </select>
                    <button onClick={searchHandler}>Search</button>
                </div>
                <div className={styles.cards}>

                </div>
            </div>
            <div className={styles.cards}>
                {!data.length ? (
                    <img src="/images/search.png" alt="Category" />
                ) : null}
                {data.map((food) => (
                    <Card key={food.id} {...food} />
                ))}
            </div>
        </div>)
}

export default CategoriesPage