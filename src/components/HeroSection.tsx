"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getTranslation } from "@/i18n";
import { TranslateContext } from "@/app/template";

const HeroSection = () => {
  const { t, i18n } = getTranslation();
  const { typeAnimationKey } = useContext(TranslateContext);

  const handleCVDownload = () => {
    const language = i18n.language as string;
    return window.open(`${window.location.href}CV/DEV_${language.toUpperCase()}.pdf`);
  }

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 lg:max-xl:col-span-7
          xl:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-xl md:text-2xl
          lg:text-4xl xl:text-6xl 2xl:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {t('hello') + " "}
            </span>
            <br></br>
            <TypeAnimation
              key={typeAnimationKey}
              sequence={[
                t("dev_java"),
                1330,
                t("dev_node"),
                1330,
                t("dev_front_end"),
                1330,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 xl:text-xl"
          >
            {
              t('hero_desc')
            }
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {t("hire_me")}
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <button
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                onClick={handleCVDownload}

              >
                Download CV
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 lg:max-xl:col-span-5 xl:col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
