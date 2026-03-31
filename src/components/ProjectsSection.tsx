import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectImg from "@/assets/project-attendance.jpg";

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="section-container">
      <motion.h2
        className="font-display text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="glow-text">Project</span>
      </motion.h2>

      <motion.div
        className="glass-card-hover overflow-hidden max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={projectImg}
            alt="Attendance System using Face Recognition"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>
        <div className="p-8">
          <h3 className="font-display text-2xl font-bold mb-3">
            Attendance System using Face Recognition
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            A smart system designed for colleges, universities, and institutions to automate attendance tracking using facial recognition technology. Features real-time face detection, high accuracy recognition, and seamless integration with existing institutional workflows.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "OpenCV", "Face Recognition", "Machine Learning"].map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
