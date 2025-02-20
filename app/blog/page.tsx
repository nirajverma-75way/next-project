"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import style from "./Blog.module.css"
import useRelativeTime from '../hooks/useRelativeTime';
import BlogCard from './blogCard';

export default function Blog() {
    const subArticles = [
        {
            image: "https://www.igp.com/blog/wp-content/uploads/2022/11/good-morning-pic.jpg",
            title: "Rover raised $65 million for pet sitting",
            desc: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover",
            link: "www.google.com",
            category: 2,
            created_at: "2025-02-10T11:44:17.863+00:00"
        },
        {
            image: "https://www.igp.com/blog/wp-content/uploads/2022/11/good-morning-pic.jpg",
            title: "MateLabs mixes machine learning with IFTTT",
            desc: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can wit",
            link: "www.google.com",
            category: 2,
            created_at: "2025-02-10T11:44:17.863+00:00"
        },
        {
            image: "https://www.igp.com/blog/wp-content/uploads/2022/11/good-morning-pic.jpg",
            title: "US venture investment ticks up",
            desc: "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings",
            link: "www.google.com",
            category: 3,
            created_at: "2025-02-10T11:44:17.863+00:00"
        },
        {
            image: "https://www.igp.com/blog/wp-content/uploads/2022/11/good-morning-pic.jpg",
            title: "Startup Insticator raises $5.2M",
            desc: "Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes",
            link: "www.google.com",
            category: 1,
            created_at: "2025-02-10T11:44:17.863+00:00"
        },
    ];
    const categories = [{ id: 1, title: "title 1" }, { id: 2, title: "title 2" }, { id: 3, title: "title 3" }, { id: 4, title: "title 4" }]
    const [category, setCategory] = useState(0);
    const filter = (catId: number) => {
        category === catId ? setCategory(0) : setCategory(catId);
    }
    const filterData = subArticles?.filter((d) => category === 0 || d.category === category) || [];
    return (
        <>
            <div className={style.flex_wrap}>
                {categories?.map((data, index) => <div key={index} onClick={() => filter(data.id)} className={category === data.id ? style.category_active : style.category}>{data.title}</div>)}
            </div>
            <div className={style.flex_wrap}>
                {filterData.length > 0 ? (filterData?.map((data, index) => <BlogCard key={index} data={data} />)) : (<p>No Blog Found</p>)}
            </div>
        </>
    )
}
