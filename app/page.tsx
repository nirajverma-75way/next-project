"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./Slider";
import Journey from "./journey";
import VideoGallery from "./videoContent";
import Hero from "./hero";
import { useState } from "react";
import Button from "./Animation/Button";

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

  const [page, setPage] = useState('BUTTON1')

  return (
    <div style={{ justifyItems: "center" }}>
      <Button> Click Me</Button>
      <Hero onChangePage={(data: string) => setPage(data)} page={page} />
      <Slider data={sliderData} row={3} />
      <VideoGallery />
      <Button> Learn Me</Button>
    </div>
  );
}
