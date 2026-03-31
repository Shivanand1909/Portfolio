import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 80, category: "Programming" },
  { name: "HTML / CSS", level: 80, category: "Development" },
  { name: "JavaScript", level: 75, category: "Development" },
  { name: "React", level: 70, category: "Development" },
  { name: "Problem Solving", level: 75, category: "Core" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="floating-shape w-72 h-72 bg-accent top-0 right-0" style={{ animationDelay: "3s" }} />
    <div className="section-container relative z-10">
      <motion.h2
        className="font-display text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="glow-text">Skills</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-primary">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
              />
            </div>
            <span className="text-xs text-muted-foreground mt-2 block">{skill.category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
