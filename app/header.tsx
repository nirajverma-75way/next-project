import Image from 'next/image'
import React, { useState } from 'react'
import style from './header.module.css'
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import useBreakpoint from './hooks/useBreakPoints';
import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { useDialog } from '@/app/hooks/useDialog';

export default function Header() {
    const isMobile = useBreakpoint("md");
    const { showDialog } = useDialog("signup");
    console.log(isMobile)
    const [openMenu, setOpenMenu] = useState(false);
    const contact = (<div className={style.contact_bar}>
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
    </div>);
    const social = (<div>
        Social Links
    </div>)

    const link = (<ul className={style.link}>
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>
        <li>Link6</li>
    </ul>)

    const desktop_view = (<div className={style.w_full}>
        <div className={style.upper_bar}>
            {contact}
            {social}
        </div>
        <div className={style.d_flex}>
            <div className={style.nav_bar}>
                {link}
            </div>
            <div>
                <button onClick={showDialog} className={style.btn}>Click It</button>
            </div>
        </div>
    </div>)
    const mobile_view = (
        <div className={style.mobile_view}>
            <div>
                {link}
            </div>
            <div className={style.justify_center}>
                <button className={style.btn}>Click It</button>
            </div>

            <div >
                {contact}
                <div className={style.justify_center}>{social}</div>
            </div>
        </div>);
    return (
        <>
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
                {isMobile && (!openMenu ? <ImMenu onClick={() => setOpenMenu(true)} className={style.bars} /> : <MdOutlineClose onClick={() => setOpenMenu(false)} className={style.bars} />)}
                {!isMobile && desktop_view}
            </div>
            {openMenu && isMobile && mobile_view}
        </>
    )
}
