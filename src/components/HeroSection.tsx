import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background shapes */}
    <div className="floating-shape w-96 h-96 bg-primary -top-20 -left-20" />
    <div className="floating-shape w-80 h-80 bg-secondary top-1/2 right-0" style={{ animationDelay: "5s" }} />
    <div className="floating-shape w-64 h-64 bg-accent bottom-10 left-1/3" style={{ animationDelay: "10s" }} />

    <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
      {/* Text */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-medium mb-2">Hello, I'm</p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Shivanand <span className="glow-text">Nishad</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-8">
          Passionate Developer | Problem Solver | Web Enthusiast. I build efficient, user-friendly applications and love transforming ideas into real-world products.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg glow-border text-foreground font-medium hover:bg-muted/30 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile picture */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass-card p-1.5">
            <img
              src={profileImg}
              alt="Shivanand Nishad"
              className="w-full h-full rounded-full object-cover"
              width={512}
              height={512}
            />
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 -z-10 blur-xl" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
