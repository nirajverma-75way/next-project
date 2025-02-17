import Image from 'next/image'
import React from 'react'
import style from './header.module.css'
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdCall } from "react-icons/md";
export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Image
                    src="/next.svg"
                    alt="logo"
                    width={180}
                    height={38}
                    priority
                />
            </div>
            <div className={style.w_full}>
                <div className={style.upper_bar}>
                    <div className={style.contact_bar}>
                        <div>
                            <MdEmail /> Email
                        </div>
                        <hr />
                        <div>
                            <MdCall /> Phone
                        </div>
                        <hr />
                        <div>
                            <FaClock /> Timing
                        </div>
                    </div>
                    <div>
                        Social Links
                    </div>
                </div>
                <div className={style.d_flex}>
                    <div className={style.nav_bar}>
                        <ul className={style.link}>
                            <li>Link1</li>
                            <li>Link2</li>
                            <li>Link3</li>
                            <li>Link4</li>
                            <li>Link5</li>
                            <li>Link6</li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.btn}>Click It</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
