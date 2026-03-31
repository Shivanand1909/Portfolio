import { motion } from "framer-motion";
import { GraduationCap, Heart, Rocket } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl font-bold text-center mb-4">
          About <span className="glow-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A passionate and driven developer focused on building efficient, user-friendly applications. I enjoy solving problems, continuously learning new technologies, and transforming ideas into real-world applications using modern web technologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: GraduationCap,
            title: "Education",
            desc: "B.Tech in Information Technology — APJ Abdul Kalam Technical University, Lucknow, UP. Expected Graduation: 2028.",
          },
          {
            icon: Heart,
            title: "Passion",
            desc: "I thrive on solving complex problems and crafting seamless user experiences with clean, maintainable code.",
          },
          {
            icon: Rocket,
            title: "Growth Mindset",
            desc: "As a fresher, I embrace every challenge as an opportunity to grow, adapt, and push the boundaries of what I can build.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="glass-card-hover p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
