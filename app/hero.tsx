import Image from 'next/image'
import React from 'react'
import style from './home.module.css';
import Div from './Animation/Div';

interface HeroProps {
    onChangePage: (page: string) => void;
    page: string;
}

export default function Hero({ onChangePage, page }: HeroProps) {
    return (
        <div className={style.container}>
            <div className={style.w_half}>

                <Div direction="top">
                    <h1>Title</h1>
                    <p>Subtitile</p>
                </Div>
                <Div direction="left" delay={1} duration={2} >
                    <div className={style.btn_container}>
                        <button onClick={() => onChangePage('BUTTON1')} className={page === "BUTTON1" ? style.active_btn : style.inactive_btn}>Button1</button>
                        <button onClick={() => onChangePage('BUTTON2')} className={page === "BUTTON2" ? style.active_btn : style.inactive_btn}>Button2</button>
                    </div>
                </Div>
                <Div direction="bottom">
                    <div>
                        <button>Get Started</button>
                        <div>Social Links</div>
                    </div>
                </Div>



            </div>
            <Div direction="right">
                <div className={style.img}>
                    <Image
                        src={"http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-it-works.a4384e5d.png&w=1920&q=75"}
                        alt="hero-section"
                        height={300}
                        width={250} />
                </div>
            </Div>

        </div>
    )
}
