"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const updatePos = (e: MouseEvent) => {
    if (!ref.current) return;

    const { top, left } = ref.current.getBoundingClientRect();
    posX.set(e.x - left);
    posY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePos);

    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  }, []);

  // Moved translateStyle outside any dynamic block
  const translateStyle = useMotionTemplate`translate(${posX}px, ${posY}px)`;

  return (
    <Reveal initialY={40} delay={0.5}>
      <section
        ref={ref}
        id="contact"
        className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px] group overflow-hidden"
      >
        <div className="flex flex-col md:flow-row gap-5 md:justify-between md:w-full">
          <h2 className="font-semibold text-[22px] md:text-[40px] md:max-[462px]">
            Want me on your team? Let&#39;s make it happen ✨
          </h2>
          <div className="flex flex-col gap-5 items-center md:items-end">
            <a
              href="mailto:sayyedmudassir443@gmail.com"
              className="self-center md:self-start bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal transform transition-transform hover:scale-105"
            >
              Let&#39;s get in touch
              <img src="/mail_icon.svg" alt="Mail icon" />
            </a>
            <div className="flex flex-row gap-1">
              <a
                href="https://github.com/SayyedMudassir2"
                className="contact-button"
              >
                <Image
                  src="/github_logo_dark.svg"
                  alt="Github icon"
                  height={16}
                  width={17}
                  className="hidden dark:block"
                />
                <Image
                  src="/github_logo.svg"
                  alt="Github icon"
                  height={16}
                  width={17}
                  className="dark:hidden"
                />
              </a>
              <a
                href="https://twitter.com/SayedMudasir443"
                className="contact-button"
              >
                <Image
                  src="/twitter_icon_dark.svg"
                  alt="Twitter icon"
                  height={14}
                  width={17}
                  className="hidden dark:block"
                />
                <Image
                  src="/twitter_icon.svg"
                  alt="Twitter icon"
                  height={14}
                  width={17}
                  className="dark:hidden"
                />
              </a>
              <a
                href="https://stackoverflow.com/users/28914501/sayyed-mudassir"
                className="contact-button"
              >
                <Image
                  src="/stackoverflow_icon_dark.svg"
                  alt="Stack Overflow icon"
                  height={14}
                  width={17}
                  className="hidden dark:block"
                />
                <Image
                  src="/stackoverflow_icon.svg"
                  alt="Stack Overflow icon"
                  height={14}
                  width={17}
                  className="dark:hidden"
                />
              </a>
            </div>
          </div>
        </div>
        <small>Copyright &copy; Sayyed Mudassir 2024</small>
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-violet-700 to-transparent group-hover:from-[#7a25b8] rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            left: posX,
            top: posY,
            transform: "translate(-50%, -50%)",
          }}
        ></motion.div>
      </section>
    </Reveal>
  );
};

export default Contact;
