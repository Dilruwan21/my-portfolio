


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGraduationCap, FaPython } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs, SiGraphql } from "react-icons/si";
import { BsAwardFill } from "react-icons/bs";

// Import profile image
import profilePic from './assect/me.jpg';

// Import project images
import teaFactoryProject from './assect/t.png';
import taskManagerProject from './assect/sw.png';
import socialDashboardProject from './assect/h1.jpeg';
import socialDashboardProject_ from './assect/s.webp';

// Import certificate images
import awsCert from './assect/s3.png';
import googleCloudCert from './assect/s1.png';
import reactCert from './assect/s2.png';


export default function App() {
  // Active section tracking
  const [activeSection, setActiveSection] = useState("home");
  
  // Custom cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Project hover state
  const [isHoveringProject, setIsHoveringProject] = useState(null);
  
  // Certificate scroll state
  const [certificateScroll, setCertificateScroll] = useState(0);
  
  // Typing animation state
  const [typedName, setTypedName] = useState("");
  const name = "Anuradha Dilruwan";
  const title = "Full Stack Developer";

  // Track scroll position and mouse movement
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < name.length) {
        setTypedName(name.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Projects data - replace with your actual projects
  const projects = [
    {
      title: "AI-Driven Supply Chain Optimization for Tea Factory Management in Sri Lanka's Smallholdings.",
      description: "Developed a full-stack, AI-powered web platform to modernize and digitize tea factory operations in Sri Lanka, with a focus on empowering smallholder tea garden owners. The system uses AI algorithms to forecast monthly tea production and predict income for smallholders, helping factory managers and transporters make informed decisions.",
      github: "https://github.com/Dilruwan21/AI-Driven-Supply-Chain-Optimization-for-Tea-Factory-Management-in-Sri-Lanka-s-Smallholdings.git",
      tech: ["React", "Node.js", "MongoDB", "Python"],
      image: teaFactoryProject
    },
    {
      title: "Sportswear E-Commerce Web App",
      description: "A MERN stack-based sportswear e-commerce application with JWT authentication. Includes product browsing, secure login, cart management, order processing, and admin dashboard for inventory control. ",
      github: "https://github.com/Dilruwan21/sportswear-ecommerce.git",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
      image: taskManagerProject
    },
    {
      title: "Hotel Booking Website - A Modern Reservation Platform",
      description: "The Hotel Booking Website is a modern and user-friendly platform designed to simplify the process of reserving hotel accommodations while offering unique features that make it stand out in the market. Developed using React.js for a dynamic and interactive frontend, Node.js for a robust and efficient backend, and MongoDB as the database for seamless data management, this project provides a streamlined and reliable booking experience. With its intuitive interface, the platform is optimized for both desktop and mobile devices, ensuring accessibility and convenience for all users.",
      github: "https://github.com/Dilruwan21/Hotel-Reservation-System-.git",
      
      tech: ["React", "Node.js", "Mongodb"],
      image: socialDashboardProject
    },

    {
      title: " SmartWatchAuth: Neural Network-Based Biometric Authentication",
      description: "SmartWatchAuth is a MATLAB-based project developed for the AI and Machine Learning module at NSBM Green University. This system focuses on biometric user authentication by analyzing motion data collected from smartwatches or smartphones using built-in accelerometers.",
      github: "https://github.com/Dilruwan21/Dilruwan21-smartwatch-authentication-ml.git",
      
      tech: ["Mathlab"],
      image: socialDashboardProject_
    }
  ];

  // Skills data - customize with your skills
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "MysQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-700" /> }
  ];

  // Education data - update with your education
  const education = [
    {
      degree: "Bachelor of Science (Hon’s) in Software Engineering",
      institution: "University of Plymouth (U K) Nsbm Green University",
      year: "2022 - 2026",
      description: "Focus on Full Stack Development.",
      icon: <FaGraduationCap className="text-blue-500" />
    },
    {
      
      institution: "Dharmapala College Bandarawela",
      year: "2018 - 2021",
      description: " GCE Advanced Level : 2021 (2022) Maths Stream",
      icon: <FaGraduationCap className="text-blue-500" />
    }
  ];

  // Certifications data - add your actual certificates
  const certifications = [
    {
      title: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      year: "2022",
      description: " Ability to develop and maintain Web Application using React.",
      image: awsCert,
      link: "https://www.linkedin.com/learning/certificates/defc3275fb7c010bded0e7796af2cee946dc436fb1b8488dd0c3e97beb62f73a?u=26140778"
    },
    {
      title: "MongoDB Cloud Essential Training",
      issuer: "LinkedIn Learning",
      year: "2023",
      description: "Ability to use Mongodb Cloud.",
      image: googleCloudCert,
      link: "https://www.linkedin.com/learning/certificates/04793e83a4ee9256c2e84dc963dc483a9e16428d02f05a3cae7452c9f305c517?u=26140778"
    },
    {
      title: "Node.js Essential Training",
      issuer: "LinkedIn Learning",
      year: "2023",
      description: "Ability to use node.js for Web Development. ",
      image: reactCert,
      link: "https://www.linkedin.com/learning/certificates/1530a98694da22cb0f8cd185cad086335c5e3e07f3a828987fc823f545321057?u=26140778"
    },
    
  ];

  // Social links - update with your actual profiles
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Dilruwan21", icon: <FiGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anuradha-dilruwan-3b128a29b/", icon: <FiLinkedin /> },
    
    { name: "Email", url: "mailto:anuradhadilruwan5@gmail.com", icon: <FiMail /> }
  ];

  // Navigation items
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  // Floating shapes animation for background
  const FloatingShapes = () => {
    const shapes = [
      { top: "10%", left: "5%", size: "w-16 h-16", color: "bg-blue-500/20", animation: "animate-float1" },
      { top: "70%", left: "80%", size: "w-24 h-24", color: "bg-purple-500/20", animation: "animate-float2" },
      { top: "30%", left: "60%", size: "w-20 h-20", color: "bg-pink-500/20", animation: "animate-float3" },
      { top: "80%", left: "20%", size: "w-12 h-12", color: "bg-yellow-500/20", animation: "animate-float4" }
    ];

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${shape.size} ${shape.color} ${shape.animation}`}
            style={{ top: shape.top, left: shape.left }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    );
  };

  // Floating particles animation
  const FloatingParticles = () => {
    const particles = Array(20).fill(0);
    
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-blue-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0,
              y: 0,
              x: 0
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatDelay: Math.random() * 10
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Background animations */}
      <FloatingShapes />
      <FloatingParticles />
      
      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: activeSection === "home" ? 1.5 : 1
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <motion.ul className="flex gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md shadow-lg">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-full transition-colors ${activeSection === item.id ? "bg-blue-500 text-white" : "hover:bg-white/20"}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl z-10"
        >
          <motion.p 
            className="text-lg mb-2 text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typewriter text="Hello, I'm" delay={100} />
          </motion.p>
          
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              delay: 0.4,
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {typedName}
            <motion.span 
              className="ml-1 inline-block w-1 h-12 bg-blue-500 align-middle"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.h1>
          
          <motion.h2
            className="text-3xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter text={title} delay={150} />
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I specialize in crafting high-performance, scalable web applications with cutting-edge technologies. 
            With expertise in both frontend and backend development, I deliver seamless digital experiences 
            that drive business growth and user engagement.
          </motion.p>
          
          <motion.div
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaReact className="text-4xl text-blue-500 hover:text-blue-400 transition-colors cursor-pointer" />
            <SiTypescript className="text-4xl text-blue-600 hover:text-blue-500 transition-colors cursor-pointer" />
            <SiNextdotjs className="text-4xl text-white hover:text-gray-300 transition-colors cursor-pointer" />
            <FaNodeJs className="text-4xl text-green-500 hover:text-green-400 transition-colors cursor-pointer" />
            <SiMongodb className="text-4xl text-green-600 hover:text-green-500 transition-colors cursor-pointer" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-8 bottom-8 flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
              whileHover={{ y: -5 }}
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-purple-500 blur-3xl"></div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm mb-2"
          >
            Scroll Down
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-4 h-4 border-r-2 border-b-2 border-blue-500 rotate-45"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              About <span className="text-blue-500">Me</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I am passionate about exploring new technologies and staying updated with industry trends. Always seeking opportunities to learn, grow, and contribute to impactful projects, I thrive on challenges and collaboration. Let's connect and create something extraordinary together!
            </motion.p>
            
            <motion.p 
              className="text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact">
                <motion.button
                  className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500/10 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload /> Resume
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
              initial={{ scale: 0.9, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={profilePic}
                alt="Anuradha Dilruwan"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-blue-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
            
            {/* Floating tech icons around profile */}
            <motion.div
              className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center text-blue-500"
              initial={{ x: -20, y: -20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaReact className="text-xl" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-green-500 flex items-center justify-center text-green-500"
              initial={{ x: 20, y: 20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              animate={{
                y: [0, 10, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <FaNodeJs className="text-xl" />
            </motion.div>
            
            <motion.div
              className="absolute top-0 right-0 w-10 h-10 rounded-full bg-gray-800 border-2 border-yellow-500 flex items-center justify-center text-yellow-500"
              initial={{ x: 20, y: -20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              animate={{
                x: [0, 5, -5, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaJs className="text-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My <span className="text-blue-500">Skills</span>
          </motion.h2>
          
          <motion.p
            className="text-xl mb-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technologies I've worked with and mastered over the years
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-gray-800 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <motion.div
                  className="w-full bg-gray-700 rounded-full h-2 mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="h-full rounded-full bg-blue-500" 
                    style={{ width: `${80 + Math.random() * 20}%` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl mb-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-900 relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setIsHoveringProject(index)}
                onMouseLeave={() => setIsHoveringProject(null)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <AnimatePresence>
                    {isHoveringProject === index && (
                      <motion.div
                        className="absolute inset-0 bg-black/70 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex gap-4">
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <FiExternalLink /> Live Demo
                            </motion.a>
                          )}
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                          >
                            <FiGithub /> View Code
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-blue-900/50 text-blue-200"
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education & <span className="text-blue-500">Certifications</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-blue-500" /> Education
              </h3>
              <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-0.5 before:bg-blue-500/20">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border-2 border-blue-500/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {edu.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-lg font-medium text-blue-500 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <BsAwardFill className="text-yellow-500" /> Certifications
              </h3>
              
              {/* Certificate Scroll Container */}
              <motion.div 
                className="relative h-[600px] overflow-y-auto pr-4"
                onScroll={(e) => setCertificateScroll(e.currentTarget.scrollTop)}
              >
                <div className="space-y-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden shadow-lg bg-gray-900"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FiExternalLink /> View Certificate
                          </motion.a>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
                        <p className="text-lg font-medium text-blue-500 mb-1">{cert.issuer}</p>
                        <p className="text-sm text-gray-400 mb-2">{cert.year}</p>
                        <p className="text-gray-300">{cert.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Let's <span className="text-blue-500">Connect</span></h2>
            <p className="text-xl max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/anuradha-dilruwan-3b128a29b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <FiLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Connect With Me</p>
                  <p className="font-medium">on LinkedIn</p>
                </div>
              </motion.a>
              
              {/* GitHub */}
              <motion.a
                href="https://github.com/Dilruwan21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-3 rounded-full bg-gray-500/10 text-gray-300">
                  <FiGithub className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Github</p>
                  <p className="font-medium">@ Dilruwan21</p>
                </div>
              </motion.a>
              
              {/* Email */}
              <motion.a
                href="mailto:anuraadhadilruwan5@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">anuradhadilruwan5@gmail.com</p>
                </div>
              </motion.a>
            </div>
            
            
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          &copy; {new Date().getFullYear()} Anuradha Dilruwan. All rights reserved
          <motion.a 
            href="#home" 
            className="text-blue-500"
            whileHover={{ y: -3 }}
          >
            Back to top
          </motion.a>
        </motion.p>
      </footer>
    </div>
  );
}

// Typewriter component for typing animation
const Typewriter = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span 
          className="inline-block w-1 h-6 bg-blue-500 align-middle ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};

