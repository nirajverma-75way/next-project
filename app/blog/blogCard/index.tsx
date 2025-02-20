import useRelativeTime from '@/app/hooks/useRelativeTime'
import React from 'react'
import style from './Blogcard.module.css'
import Image from 'next/image'

export default function BlogCard({ data }) {
    return (
        <div className={style.blog_box} >
            <Image className={style.img} src={data.image} alt={data.title} height={150} width={350} />
            <p>{useRelativeTime(data.created_at)}</p>
            <b>{data.title}</b>
        </div>
    )
}
