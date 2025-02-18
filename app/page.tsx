"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./Slider";
import Journey from "./journey";

export default function Home() {
  const topto = () => {
    window.scrollTo(0, 0);
  }
  const sliderData = [{ title: "title 1", description: "title 1 description", btn: "Read more" },
  { title: "title 2", description: "title 2 description", btn: "Read more" },
  { title: "title 3", description: "title 3 description", btn: "Read more" },
  { title: "title 4", description: "title 4 description", btn: "Read more" },
  { title: "title 5", description: "title 5 description", btn: "Read more" },
  { title: "title 6", description: "title 6 description", btn: "Read more" },
  { title: "title 7", description: "title 7 description", btn: "Read more" },
  { title: "title 8", description: "title 8 description", btn: "Read more" },
  { title: "title 9", description: "title 9 description", btn: "Read more" },
  { title: "title 10", description: "title 10 description", btn: "Read more" },
  { title: "title 11", description: "title 11 description", btn: "Read more" },
  { title: "title 12", description: "title 12 description", btn: "Read more" }]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <button onClick={topto}>Click</button>
      </footer>

      <div>
        <Slider data={sliderData} row={3} />
        <Journey data={sliderData} />
      </div>
    </div>
  );
}
