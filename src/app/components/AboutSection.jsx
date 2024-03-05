"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import H4 from '/public/H4.png'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 -mt-8">
        <li>Next.js</li>
        <li>React</li>
        <li>Typescript</li>
        <li>Tailwind Css</li>
        <li>Sanity.io</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 -mt-8">
        <li><strong>Bachelors of Science in Computer Science (BSCS)</strong> <br/> 
            From Virtual University of Pakistan
        </li>
        <li className="mt-4"><strong>Web 3.0 and Metaverse Developer</strong> <br />
            From Pakistan Institute of Artificial Intelligence and Computing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 -mt-8">
        <li>PIAIC WEB 3.0 DEVELOPER</li>
        {/* <li></li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 md:mt-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={H4} width={500} height={500}  className=""/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Web 3.0 developer specializing in Next.js, React, JavaScript, Tailwind CSS, and Git.
           Passionate about leveraging cutting-edge technologies to build modern and dynamic web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;