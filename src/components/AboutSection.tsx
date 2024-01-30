"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { getTranslation } from "@/i18n";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 flex flex-row flex-wrap gap-2">
        <li>Java</li>
        <li>Quarkus</li>
        <li>Spring Boot</li>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Express</li>
        <li>TypeORM</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>NoSQL</li>
        <li>REDIS</li>
        <li>GraphQL</li>
        <li>TDD</li>
        <li>Jest</li>
        <li>ORM&apos;s</li>
        <li>Docker</li>
        <li>Microservices</li>
        <li>API RESTful</li>
        <li>PWA</li>
        <li>JavaScript (EcmaScript All Patterns)</li>
        <li>JQuery</li>
        <li>Typescript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Headless CMS&apos;s (Strapi)</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 flex flex-row flex-wrap gap-2">
        <li>
          <a
            href="https://certificados.descomplica.com.br/graduacao/ad6d0add29a9ff7ca80a5f02a6610e5f46f50e06be2c39c75e0f927593f80e79"
            target="_blank"
            className="hover:text-primary-500"
          >
            Object-Oriented Developer
          </a>
        </li>
        <li>
          <a
            href="https://www.udemy.com/certificate/UC-6a4c3e6a-0ead-4423-b9a5-0498d55b969b"
            target="_blank"
            className="hover:text-primary-500"
          >
            Curso de React.Js e Next.Js (nível intermediário e avançado)
          </a>
        </li>
        <li>
          <a
            href="https://certificados.descomplica.com.br/graduacao/8b558e125489605e47e0876fb8c2de67bef5114a22c7b024c5be4de7ab585cfa"
            target="_blank"
            className="hover:text-primary-500"
          >
            DB Developer
          </a>
        </li>
        <li>
          <a
            href="https://www.udemy.com/certificate/UC-303c998f-7eee-403b-bf13-6f868c568906"
            target="_blank"
            className="hover:text-primary-500"
          >
            Arquitetura de Redes
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-e0f623c9-4f3f-49c4-af4a-0060dc0ee626"
            target="_blank"
            className="hover:text-primary-500"
          >
            API Restful Javascript com Node.js, Typescript, TypeORM
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex gap-2 pl-2">
        <li>Análise e Desenvolvimento de Sistemas - 2025</li>
      </ul>
    ),
  }
];

export type Tab = 'skills' | 'education' | 'certifications';

const AboutSection = () => {
  const [tab, setTab] = useState<Tab>("skills");
  const [/* isPending */, startTransition] = useTransition();
  const { t } = getTranslation();

  const handleTabChange = (tabName: Tab) => startTransition(() => setTab(tabName));

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('about_me')}</h2>
          <p className="text-base lg:text-lg text-justify">
            {t('about_me_text_1')}
          </p>
          <br />
          <p className="text-base lg:text-lg text-justify">
            {t('about_me_text_2')}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {t('skills')}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {t('education')}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {t('certifications')}{" "}
            </TabButton>
          </div>
          <div
            className="mt-8 h-20 overflow-auto scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-transparent scrollbar-thumb-rounded-full"
          >
            {tabData.find((t) => t.id === tab)!.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
