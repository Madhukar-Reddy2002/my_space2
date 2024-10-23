import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Brain,
  Monitor,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
  Heart,
  Github,
  BookOpen,
  Rocket
} from 'lucide-react';
import imag from "../assets/dp.jpg"

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [bioRef, bioInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 }
    ],
    dataScience: [
      { name: 'Python', level: 90 },
      { name: 'Pandas/NumPy', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Power BI', level: 80 }
    ]
  };

  const experiences = [
    {
      title: 'Data Science Intern ',
      company: 'Upgrad Campus',
      period: 'Jan 2024 - July 2024',
      description: 'Led a team in developing a Flower Recognition System using Convolutional Neural Networks.',
      achievements: [
        'Utilized Python and Streamlit to build an interactive interface for image upload, data preprocessing, and prediction.',
        'Achieved 95% accuracy in predicting flower types, demonstrating expertise in deep learning models and data-driven decision making.',
        'Managed project timelines, delegated tasks, and ensured delivery, showcasing project management and team collaboration.',
        'Performed data collection, wrangling, and preprocessing to improve model efficiency'
      ]
    },
  ];

  const interests = [
    { icon: <Rocket className="w-6 h-6" />, text: 'Exploring new technologies' },
    { icon: <Github className="w-6 h-6" />, text: 'Contributing to open-source' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'Continuous learning' },
    { icon: <Heart className="w-6 h-6" />, text: 'Building user-centric apps' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-400 to-purple-600" />
        </motion.div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate Fullstack Developer and Data Scientist, bridging the gap between technology and data.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <section ref={bioRef} className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-gray-300">
              <h2 className="text-3xl font-bold text-sky-400">Journey & Passion</h2>
              <p>
                My journey into software development began with a curiosity for problem-solving and a knack for coding. 
                Over the years, I&apos;ve evolved into a versatile developer capable of handling both frontend and backend challenges.
              </p>
              <p>
                In the realm of data science, I leverage cutting-edge technologies to extract meaningful insights and build 
                predictive models that drive business decisions. My approach combines analytical thinking with creative 
                problem-solving.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-sky-400 mb-4">Interests & Goals</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sky-400">{interest.icon}</span>
                      <span>{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="relative"
              style={{ y: y2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl mt-3">
                <img
                  src={imag}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-sky-400 text-center mb-12"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-6">
                  {category === 'frontend' && <Monitor className="w-6 h-6 text-sky-400" />}
                  {category === 'backend' && <Server className="w-6 h-6 text-sky-400" />}
                  {category === 'dataScience' && <Cpu className="w-6 h-6 text-sky-400" />}
                  <h3 className="text-xl font-semibold">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: '100%' } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <motion.div
                          className="h-full bg-sky-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-sky-400 text-center mb-12"
          >
            Professional Journey
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-sky-500 
                         transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-400">{experience.title}</h3>
                    <p className="text-gray-400">{experience.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{experience.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center space-x-2 text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;