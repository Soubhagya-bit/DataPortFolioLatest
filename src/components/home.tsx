import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#hero"
            className="text-xl font-bold text-gray-800 cursor-pointer px-4 flex items-center gap-1"
            variants={slideUp}
          >
            Soubhagya<span className="text-primary">Swain</span>
          </motion.a>
          <motion.nav
            className="hidden md:flex items-center justify-end space-x-8 flex-1 ml-8 font-semibold tracking-wide"
            variants={slideUp}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <a
              href="#hero"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Skills
            </a>
            <a
              href="#education"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Education
            </a>
            <a
              href="#certifications"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-200"
            >
              Contact
            </a>
          </motion.nav>
          <motion.div variants={slideUp}>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-12">
        {" "}
        {/* Reduced top padding for header offset */}
        <section id="hero" className="py-20">
          <HeroSection />
        </section>
        <section id="projects" className="py-24 bg-muted/30">
          <ProjectsGallery />
        </section>
        <section id="skills" className="py-24">
          <SkillsSection />
        </section>
        <section id="education" className="py-24 bg-muted/30">
          <EducationSection />
        </section>
        <section id="certifications" className="py-24">
          <CertificationsSection />
        </section>
        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let’s Connect And Explore How We Can Create Impact Together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto"
            >
              <div className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">Soubhagya Swain</h2>
                  <p className="text-muted-foreground">
                    Data Analyst | Business Analyst
                  </p>

                  <div className="mt-8 space-y-4">
                    <motion.a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=soubhagyaswain141@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:shadow-md transition-all duration-200"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Reach Out Via Gmail</span>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/soubhagyaswain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:shadow-md transition-all duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>Connect on LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Soubhagya Swain Data Analyst Portfolio
          </p>
          <p className="mt-2">Always Evolving, Just Like Data.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
