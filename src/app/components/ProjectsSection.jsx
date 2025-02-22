"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import H1 from '/public/H1.png'

const projectsData = [
  {
    id: 1,
    title: "AI Agency Website",
    description: "Complete website built with Nextjs, React and shadcn ui",
    image: "/images/projects/A1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.evrenai.com/",
  },
  {
    id: 3,
    title: "Marketing Agency Website",
    description: "Complete Marketing Agency Website built with Nextjs, React and Tailwind CSS",
    image: "/images/projects/A2.png",
    tag: ["Web","All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://fimarketingagency.com/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "E-commerce Website built with Nextjs using Sanity.io and NeonDB",
    image: "/images/projects/P8.png",
    tag: ["All", "Web","Mobile"],
    previewUrl: "https://ecommerce-website-using-sanity.vercel.app",
  },
  {
    id: 4,
    title: "Construction Company Website",
    description: "Complete Construction Company Website",
    image: "/images/projects/A3.png",
    tag: ["All", "Mobile","Web"],
    gitUrl: "/",
    previewUrl: "https://www.zenunibau.com/",
  },

  {
    id: 5,
    title: "Overseas Employment Company Website",
    description: "Complete Overseas Employment Company Website built with latest Technologies and Frameworks",
    image: "/images/projects/A4.png",
    tag: ["Web","All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://al-ajman.vercel.app/",
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