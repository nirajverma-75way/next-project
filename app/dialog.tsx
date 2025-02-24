"use client";
import { useDialog } from "@/app/hooks/useDialog";
import styles from "./Dialog.module.css";
import { DialogStateProvider } from "@/app/hooks/useDialog";

const Dialog: React.FC = () => {
    const dialogKey = "signup"
    const { closeDialog } = useDialog(dialogKey);
    const openDialogs = DialogStateProvider();

    if (!openDialogs[dialogKey]) return null;

    return (
        <div className={styles.overlay} onClick={closeDialog}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={closeDialog}>✖</button>

                <div className={styles.left}>
                    <h2>Contact Us</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="Name" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <textarea placeholder="Message" className={styles.textarea}></textarea>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>

                <div className={styles.right}>
                    <p className={styles.quote}>"The best way to predict the future is to create it."</p>
                    <p className={styles.quote}>"Success is not the key to happiness. Happiness is the key to success."</p>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
