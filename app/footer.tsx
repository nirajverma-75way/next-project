import Image from "next/image";
import style from './footer.module.css'
export default function Footer() {
    const link = (<ul className={style.link}>
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>
        <li>Link6</li>
    </ul>)
    return (
        <>
            <div className={style.footer}>
                <div className={style.img}>
                    <Image
                        src="/next.svg"
                        alt="logo"
                        width={180}
                        height={38}
                        priority
                    />

                </div>
                <div className={style.right_block}>
                    <div className={style.links}><div className={style.gap_flex_block}>
                        {link}
                    </div>
                        <div className={style.gap_flex_block}>
                            {link}
                        </div>
                    </div>
                    <div className={style.gap_flex_block}>
                        <h3>Head</h3>
                        <p>description</p>
                        <div className={style.subscription_box}>
                            <input className={style.subscription_input} />
                            <button className={style.subscription_btn}>Click</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={style.hr} />
            <div className={style.lower_footer}>
                <p>etc</p>
                <div>Social Links</div>
            </div>
        </>
    )
}
