import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Business Administration (Hons)",
      institution: "Trident Academy of Creative Technology, Utkal University",
      duration: "2021 - 2024",
      gpa: "7.88/10",
      details: "Specialized in Business Management, Economics & Finance",
    },
    {
      degree: "High School (12th Standard)",
      institution: "Kendriya Vidyalaya Asansol",
      duration: "2020 - 2021",
      gpa: "7.37/10",
      details: "Major in Commerce & Economics",
    },
  ];

  return (
    <section id="education" className="container mx-auto px-4">
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
          <h2 className="text-3xl font-bold">Education</h2>
          <p className="text-muted-foreground mt-4">
            Academic Background and Qualifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.duration}</p>
                  <p className="text-primary font-medium mt-2">
                    GPA: {edu.gpa}
                  </p>
                  <p className="mt-2 text-muted-foreground">{edu.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
