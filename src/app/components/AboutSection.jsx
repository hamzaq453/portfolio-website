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
        <li>AI & ML Technologies</li>
        <ul className="list-circle pl-4 mb-2">
          <li>LangChain & LangGraph</li>
          <li>AI Agents & Autonomous Systems</li>
          <li>Large Language Models (LLMs)</li>
          <li>Chatbot Development</li>
        </ul>
        <li>Backend Development</li>
        <ul className="list-circle pl-4 mb-2">
          <li>FastAPI & Python</li>
          <li>RESTful APIs</li>
          <li>Docker & Containerization</li>
          <li>Database Design (SQL/NoSQL)</li>
        </ul>
        <li>Frontend Development</li>
        <ul className="list-circle pl-4">
          <li>Next.js</li>
          <li>React</li>
          <li>Framer Motion</li>
          <li>Tailwind CSS</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 -mt-8">
        <li><strong>Bachelors of Science in Computer Science (BSCS)</strong> <br/> 
            Virtual University of Pakistan <br />(VU)
        </li>
        <li className="mt-4"><strong>Agentic AI Developer</strong> <br />
        Presidential Institute of Artificial Intelligence and Computing (PIAIC)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 -mt-8">
        <li><strong>AI Engineering</strong></li>
        <h2 className="mt-2">Presidential Institute of Artificial Intelligence and Computing (PIAIC)</h2>
        <li className="mt-4"><strong>Full Stack Development</strong></li>
        <h2 className="mt-2">Presidential Institute of Artificial Intelligence and Computing (PIAIC)</h2>
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
            AI Engineer and Full Stack Developer with expertise in building intelligent systems and web applications. 
            Specialized in developing AI agents, autonomous systems, and chatbots using LangChain and LangGraph. 
            Proficient in modern web technologies and committed to creating innovative AI-powered solutions that deliver real business value.
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