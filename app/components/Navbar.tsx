"use client";

import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import Reveal from "./Reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set the active section to "home"
    setActiveSection("home");

    // Scroll to the top of the page on reload
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        className="bg-background card-shadow p-3 md:hidden rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
        aria-label="Toggle menu"
      >
        <img
          className="block dark:hidden"
          src="/menu_icon_light.svg"
          alt="Menu Icon"
        />
        <img
          className="hidden dark:block"
          src="/menu_icon_dark.svg"
          alt="Menu Icon"
        />
      </button>
      <Reveal initialY={-20} duration={0.5}>
        <nav
          className={cn(
            "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
            {
              "opacity-100": isOpen,
              "opacity-0 md:opacity-100": !isOpen,
            }
          )}
        >
          <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
            {["home", "skills", "projects", "testimonials", "contact"].map((section) => (
              <li key={section}>
                <div
                  className={cn("rounded p-1 duration-300 ease-in-out", {
                    "bg-primary text-white": activeSection === section,
                  })}
                  onClick={() => {
                    setActiveSection(section);
                    scrollToSection(section);
                    setIsOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setActiveSection(section);
                      scrollToSection(section);
                      setIsOpen(false);
                    }
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
