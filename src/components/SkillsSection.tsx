import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Skill {
  name: string;
  proficiency: number;
  category: string;
  description: string;
}

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([
    {
      name: "Python",
      proficiency: 75,
      category: "Programming",
      description: "Pandas, Numpy, SciPy, Statistical Analysis",
    },
    {
      name: "SQL",
      proficiency: 85,
      category: "Programming",
      description: "Complex Queries, Database Design, Query Optimization",
    },
    {
      name: "Tableau",
      proficiency: 75,
      category: "Visualization",
      description: "Dashboard Creation, Interactive Visualizations, Tableau Cloud",
    },
    {
      name: "Power BI",
      proficiency: 80,
      category: "Visualization",
      description: "Business Intelligence, DAX, Data Modeling, Data Normalization, Power Query",
    },
    {
      name: "Excel",
      proficiency: 90,
      category: "Tools",
      description: "Advanced Formulas, Pivot tables, Macros",
    },
    {
      name: "Statistical Analysis",
      proficiency: 85,
      category: "Skills",
      description: "Hypothesis Testing, Regression Analysis, ANOVA, A/B Testing",
    },
  ]);

  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Simulate loading skills progressively for animation
    const timer = setTimeout(() => {
      setVisibleSkills(skills);
    }, 500);
    return () => clearTimeout(timer);
  }, [skills]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical proficiencies and data
            analysis expertise.
          </motion.p>
        </div>

        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {visibleSkills.map((skill, index) => (
            <motion.div key={skill.name} variants={item}>
              <Card
                className="h-full transition-all duration-300 hover:shadow-md"
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.1 * index, duration: 1 }}
                  >
                    <Progress value={skill.proficiency} className="h-2" />
                  </motion.div>

                  <div className="mt-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: activeSkill?.name === skill.name ? 1 : 0,
                        height: activeSkill?.name === skill.name ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm mt-2 text-muted-foreground overflow-hidden"
                    >
                      {skill.description}
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
