"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag, { Tag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { getTranslation } from "@/i18n";

const projectsData = [
  {
    id: 1,
    title: "Menslegis",
    description: "menslegis",
    image: "/images/projects/menslegis.png",
    tag: ["All", "Both"],
    gitUrl: "https://github.com/lkasvr/menslegis-client",
    previewUrl: "https://menslegis-client.vercel.app",
  },
  {
    id: 2,
    title: "Oliveira & Rios Advogados",
    description: "oradv",
    image: "/images/projects/oradv.png",
    tag: ["All", "Both"],
    gitUrl: "https://github.com/lkasvr/or_adv",
    previewUrl: "https://www.oliveirarios.adv.br",
  },
  {
    id: 3,
    title: "Landing Page Leadster",
    description: "leadster",
    image: "/images/projects/leadster.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/lkasvr/leadster-test",
    previewUrl: "https://leadster-test-theta.vercel.app",
  },
  {
    id: 4,
    title: "Professional Resource Management - API RESTful",
    description: "prm",
    image: "/images/projects/prm.png",
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/lkasvr/prm",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<Tag>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = getTranslation();

  const handleTagChange = (newTag: Tag) => {
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
        {t('my_projects')}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Both"
          isSelected={tag === "Both"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-End"
          isSelected={tag === "Back-End"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-End"
          isSelected={tag === "Front-End"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12 ">
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
              description={t(project.description)}
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
