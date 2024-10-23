import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import imag from "../assets/mainIconsdark.svg";
import dp from "../assets/dp.jpg"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Code,
  Database,
  Brain
} from 'lucide-react';
import "./style.css";
const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [heroRef] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: 25, label: 'Projects', icon: <Code className="w-8 h-8" /> },
    { number: 15, label: 'Web Apps', icon: <Database className="w-8 h-8" /> },
    { number: 10, label: 'ML Models', icon: <Brain className="w-8 h-8" /> }
  ];

  const featuredProjects = [
    {
      title: 'Data Genie',
      description: 'AI-powered data exploration assistant',
      tags: ['ML', 'Python'],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'IPL Analytics',
      description: 'Cricket statistics dashboard',
      tags: ['Tableau', 'Analytics'],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Super Story',
      description: 'Sales prediction platform',
      tags: ['React', 'ML'],
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-6 h-6" />, href: "#", label: "Email" }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 w-full mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-center md:text-left mb-8 md:mb-0">
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Dandu Madhukar Reddy
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Fullstack Developer & Data Scientist
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full font-semibold
                          hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 text-gray-400 hover:text-sky-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image beside text on larger screens, below text on smaller screens */}
          <motion.div
            className="w-56 h-full md:w-96 md:h-full flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              alt="Profile"
              src={imag}
              className="dp w-full h-full object-cover "
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-8 h-8 text-sky-400" />
          </motion.div>
        </motion.div>
      </section>
      {/* About Preview Section */}
      <section ref={aboutRef} className=" py-5 relative flex flex-col md:flex-row items-center bg-gray-800/50">
  <div className="mx-auto px-4 md:w-1/2">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <h2 className="text-4xl font-bold mb-6 text-sky-400">About Me</h2>
      <p className="text-lg text-gray-300 mb-8">
        Passionate about creating innovative solutions that combine the power of web development
        and data science. With expertise in both domains, I build applications that not only
        look great but also deliver meaningful insights.
      </p>
      <motion.a
        href="/about"
        className="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold"
        whileHover={{ x: 5 }}
      >
        Learn more about my journey <ArrowRight className="ml-2 w-4 h-4" />
      </motion.a>
    </motion.div>
  </div>

  <div className="mx-auto px-4 md:w-1/2">
    <motion.div className="relative">
      <div className="rounded-full overflow-hidden shadow-xl w-48 h-48 md:w-64 md:h-64 flex-shrink-0 ">
        <img
          src={dp}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </div>
</section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-sky-500 
                         transition-all duration-300 text-center"
              >
                <div className="text-sky-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {statsInView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                    />
                  )}
                  +
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl font-bold text-sky-400 mb-4"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 
                         hover:border-sky-500 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-sky-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center text-sky-400 hover:text-sky-300"
                    whileHover={{ x: 5 }}
                  >
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
            <motion.a
              href="/projects"
              className="pt-5 inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold"
              whileHover={{ x: 5 }}
            >
              View all projects <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;