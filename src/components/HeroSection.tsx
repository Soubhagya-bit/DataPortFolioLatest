import React from "react";
import { motion } from "framer-motion";
import { FaKaggle } from "react-icons/fa";
import {
  ArrowDownIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  UserIcon,
  FolderIcon,
  WrenchIcon,
  InfoIcon,
  MailIcon,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
}

const HeroSection = ({
  name = "Soubhagya Swain",
  title = "Data Analyst & Business Analyst",
  bio = "I Turn Complex Data Into Clear, Actionable Insights Through Statistical Analysis, Compelling Visualizations, And Predictive Modeling — With Just Enough Magic To Make You Wonder If I Time-Traveled To Get The Answers.",
}: HeroSectionProps) => {
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-start items-center px-6 lg:px-8 pt-8 bg-background">
      {/* Hero Section */}
      <div id="profile" className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:pr-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {title}
            </h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-prose leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {bio.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5 + index * 0.02,
                    ease: "easeInOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>
              <button
                className="px-6 py-2.5 rounded-md border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                onClick={() =>
                  window.open(
                    "https://www.dropbox.com/scl/fi/ll50soyt3w267044e0d19/Soubhagya-Swain.pdf?rlkey=gc3pmwg09lp8o1jb29pvl291q&st=x7weyut4&dl=1",
                    "_blank",
                  )
                }
              >
                Download Resume
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-8 mt-12"
            >
              <a
                href="https://www.linkedin.com/in/soubhagyaswain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0077b5] transition-all duration-200 transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/soubhagya2003jan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.kaggle.com/soubhagyaswain14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#20BEFF] transition-colors duration-200"
              >
                <FaKaggle className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/soubhagya-bit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFA116] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] w-full"
          >
            <DataVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DataVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Profile image with glass effect */}
      <motion.div
        className="relative z-20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm p-1 shadow-xl"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/Soubhagya_Swain.jpg"
            alt="Soubhagya"
            className="w-full h-full rounded-full object-cover border-2 border-white/50"
          />
        </motion.div>

        {/* Decorative ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-primary/20"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
