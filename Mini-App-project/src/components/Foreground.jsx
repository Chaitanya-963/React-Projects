// import React from 'react'

// import { useState } from "react";
import { useRef } from "react";
import Card from "./Card";
// React

// React Server Components
// import * as motion from "framer-motion/client";

const Foreground = () => {

  const ref = useRef(null);

  // const data = [ icon , desc, filesize, close or download, tagdetails];

  const data = [
    {
      desc: "This is my first card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is my second card.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Subscribe", tagColor: "blue" },
    },
    {
      desc: "This is my third card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className=" w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-10">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
