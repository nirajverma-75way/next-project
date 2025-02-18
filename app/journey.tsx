import React, { useState } from 'react'
import style from "./Journey.module.css"

interface JourneyProps {
    data: { title: string, description: string }[];
}

export default function Journey({ data }: JourneyProps) {
    const [active, setActive] = useState(0);
    return (
        <div>
            <div className={style.d_flex}>
                <p>=</p>
                {data?.map((d, i) => (
                    <div className={style.d_flex}>
                        <div onClick={() => setActive(i)}>
                            {i <= active ? "T" : "X"}
                            <p>{d?.title}</p>
                        </div>
                        {i < active ? "=" : "-"}
                    </div>
                ))}
            </div>
            <div>
                <div className={style.content}>
                    {Array.from({ length: data.length }).map((_, index) => (
                        <React.Fragment key={index}>
                            {Array.from({ length: data.length }).map((_, i) => (
                                <React.Fragment key={i}>{(i <= active && (index + active) > data.length - 2) ? "T" : "X"}</React.Fragment>
                            ))}
                            <br />
                        </React.Fragment>
                    ))}
                </div>
                <div>
                    <h3>{data?.[active]?.title}</h3>
                    <p>{data?.[active]?.description}</p>
                </div>
            </div>
        </div>
    )
}
