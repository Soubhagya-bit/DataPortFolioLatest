import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Award, Medal, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analytics Professional Certificate",
      organization: "Google",
      date: "2025",
      description:
        "Foundational Program in Data Analytics Covering Data Cleaning, Analysis, Visualization, SQL, Spreadsheets, and Tools Like Tableau to Make Data-Driven Decisions.",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/30MYCT8WGI3A",
      logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
    },
    {
      title: "Business Analytics with Excel By John Hopkins University",
      organization: "Johns Hopkins University",
      date: "2024",
      description:
        "Comprehensive Course on Using Excel for Business Analytics, Covering Data Preparation, Visualization, and Statistical Techniques to Extract Insights and Support Strategic Decision-Making.",
      url: "https://www.coursera.org/account/accomplishments/verify/NOP3J556K5RH",
      logo: "/John_Hopkins.png",
    },
    {
      title: "The Power of Statistics Certificate By Google",
      organization: "Google",
      date: "2024",
      description:
        "In-Depth Exploration of Statistical Concepts Including Probability, Distributions, Hypothesis Testing, and Real-World Data Interpretation and Real World Projects.",
      url: "https://www.coursera.org/account/accomplishments/verify/V1TNQJ2DX7HP",
      logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
    },
    {
      title: "Agile Project Management",
      organization: "Atlassian",
      date: "2024",
      description:
        "Professional Certification in Agile Methodologies, Scrum Frameworks, Jira Project Management Tools, and Real-World Project Execution Strategies.",
      url: "https://www.linkedin.com/learning/certificates/c2ce512f3b64af1ff355801449660e43c616ea8ac762dd8666c6689796c742c6",
      logo: "https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg",
    },
    {
      title: "Power BI For Business Intelligence",
      organization: "Maven Analytics",
      date: "2024",
      description:
        "Comprehensive Course on Leveraging Power BI for Business Intelligence, Including Data Modeling, Interactive Dashboards, and Insightful Visualizations.",
      url: "https://www.udemy.com/certificate/UC-45db7706-7520-4368-a4d7-dc7df680fa10/",
      logo: "/Maven_Analytics.png",
    },
    {
      title: "Business Analysis Fundamentals",
      organization: "Udemy",
      date: "2024",
      description:
        "Foundational Training in Business Analysis Covering ECBA, CCBA, CBAP, Agille and Business Analysis Frameworks with Endorsement from IIBA.",
      url: "https://www.udemy.com/certificate/UC-330f6100-172c-4fab-b115-8569fbd19572",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    },
  ];

  const achievements = [
    {
      title: "Best Data Analysis Project",
      context: "International Data Science Competition",
      date: "2023",
      description:
        "First place for innovative use of ML algorithms in predictive analysis",
      logo: "/achievement1.png",
    },
    {
      title: "Outstanding Research Award",
      context: "Global Analytics Summit",
      date: "2022",
      description:
        "Recognition for contribution to predictive analytics research",
      logo: "/achievement2.png",
    },
    {
      title: "Innovation Excellence Award",
      context: "Tech Innovators Forum",
      date: "2023",
      description:
        "Recognized for developing cutting-edge solutions in data engineering",
      logo: "/achievement3.png",
    },
  ];

  return (
    <section id="certifications" className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
          <p className="text-muted-foreground mt-4">
            Professional Certifications and Notable Achievements
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="h-12 mb-4 flex items-center justify-center">
                        <img
                          src={cert.logo}
                          alt={cert.organization}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        {cert.organization} • {cert.date}
                      </p>
                      <p className="text-sm mb-6">{cert.description}</p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(cert.url, "_blank")}
                      >
                        View Certificate{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Medal className="h-5 w-5" /> Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="h-12 mb-4 flex items-center justify-center">
                        <Medal className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        {achievement.context} • {achievement.date}
                      </p>
                      <p className="text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
