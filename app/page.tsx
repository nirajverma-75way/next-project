"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./Slider";
import Journey from "./journey";
import VideoGallery from "./videoContent";
import Hero from "./hero";
import { useState } from "react";
import Button from "./Animation/Button";
import ImageReveal from "./curtain/page";
import BlogCard from "./blog/blogCard";
import SliderX from "./SliderX";

export default function Home() {
  const [activeTestomonial, setActiveTestomonial] = useState(0);
  const sliderData = [{ title: "title 1", description: "title 1 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 2", description: "title 2 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 3", description: "title 3 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 4", description: "title 4 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 5", description: "title 5 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 6", description: "title 6 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 7", description: "title 7 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 8", description: "title 8 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 9", description: "title 9 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 10", description: "title 10 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 11", description: "title 11 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" },
  { title: "title 12", description: "title 12 ǚLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             ", btn: "Read more" }]

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
  const sector = [{ title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }, { title: "title", icon: "/next.svg" }]
  const [page, setPage] = useState('BUTTON1')

  return (
    <div style={{ justifyItems: "center" }}>
      {/* quotes section */}
      {/* <div className={styles.quotes_box}>
        <p>Unfortunately, earning money is in many ways harder than ever. Inflation means bigger bills even when our paychecks aren't any bigger. One trick: before you buy something, consider the cost not as money, but as time. How long do you have to work to earn enough money to make that one impulse purchase? Is it worth the labor you put into earning it?</p>
      </div>
      <ImageReveal /> */}
      {/* Opportunity */}
      {/* <div className={styles.opportunity_box}>
        <h1 className={styles.opportunity_title}>Earning Opportunity with NirajKVerma </h1>
        <hr />
        <div>
          {[...Array(2)].map((_, index) => (
            <div key={index} className={styles.opportunity_card}>
              <h1>Title Place</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.              </p>
              <button>Read More</button>
            </div>
          ))}
        </div>

      </div> */}
      <Slider data={sliderData} row={3} />
      <SliderX />
      {/** Our Partner */}
      {/* <div className={styles.partner_box}>
        <h1>My title</h1>
        <div className={styles.partner_list}>
          <Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          />
          <Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          /><Image
            src="/next.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </div> */}
      {/* Sector */}
      {/* <div className={styles.sector_div}>
        <div className={styles.sector_box}>
          {sector?.map((data, index) => <div key={index} className={styles.sector_card}>
            <Image

              src={data.icon}
              alt="logo"
              width={180}
              height={38}
              priority
            />
            <p>{data.title}</p>
          </div>)}
        </div>
        <Image
          src="/next.svg"
          alt="logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <VideoGallery /> */}
      {/* BLOG CARD */}
      {/* <div className={styles.blog_box}>
        <div className={styles.blog_head}>
          <div>
            <p>category</p>
            <h1>{subArticles[0].title}</h1>
            <p>{subArticles[0].desc}</p>
          </div>
          <Image
            src={subArticles[0].image}
            alt="logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className={styles.blog_tail}>
          {subArticles?.slice(1, 4)?.map((data, index) => <BlogCard key={index} data={data} />)}
        </div>
      </div> */}
      {/* Testimonials */}
      {/* <div>
        <div className={styles.testimonial_list}>
          {
            subArticles?.slice(activeTestomonial, activeTestomonial + 2)?.map((data, i) =>
              <div key={i} className={styles.testimonial_div}>
                <Image
                  src={data.image}
                  alt="logo"
                  width={180}
                  height={38}
                  priority
                />
                <div>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                </div>
              </div>)
          }
        </div>
        <div className={styles.testimonial_page}>
          {
            [...Array(subArticles?.length - 1)]?.map((_, index) => <div key={index} onClick={() => setActiveTestomonial(index)} className={styles.dot}></div>)
          }
        </div>
      </div> */}
    </div>
  );
}
