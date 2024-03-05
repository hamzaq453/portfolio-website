"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import H1 from '/public/H1.png'

const projectsData = [
  {
    id: 1,
    title: "Nextjs Ecommerce Website",
    description: "Complete Ecommerce website built with Nextjs and React",
    image: "/images/projects/P1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dine-market-ruby.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website with Sanity.io",
    description: "E-commerce Website built with Nextjs using Sanity and Shadcn Ui",
    image: "/images/projects/P7.png",
    tag: ["All", "Web","Mobile"],
    previewUrl: "https://ecommerce-website-using-sanity.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website ",
    description: "Portfolio Website Sample",
    image: "/images/projects/P3.png",
    tag: ["Web","All"],
    gitUrl: "/",
    previewUrl: "https://next5-six.vercel.app",
  },
  {
    id: 4,
    title: "Blogs Website with Sanity",
    description: "Blogs Website with Sanity and Nextjs",
    image: "/images/projects/P4.png",
    tag: ["All", "Mobile","Web"],
    gitUrl: "/",
    previewUrl: "https://blog-sanity-smoky.vercel.app",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;