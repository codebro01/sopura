
"use client";

import { Button } from "@mui/material";

import Image from "next/image";

const AboutPage = () => {
  return (
    <>
    <Button variant="contained">
      Click me
    </Button>
      <Image
        src={"/home.svg"}
        width={100}
        height={100}
      />
      <div>About Page</div>
    </>

  )
}
export default AboutPage;
