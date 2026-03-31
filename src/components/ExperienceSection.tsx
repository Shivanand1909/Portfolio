import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ExperienceSection = () => (
  <section className="py-24 relative">
    <div className="section-container">
      <motion.div
        className="glass-card-hover p-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold mb-3">Fresh & Ready</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          As a fresher, I bring fresh perspectives, boundless curiosity, and an eagerness to learn, adapt, and contribute. I'm ready to take on real-world challenges and grow alongside talented teams.
        </p>
        <span className="inline-block px-4 py-1.5 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
          Open to Opportunities
        </span>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
