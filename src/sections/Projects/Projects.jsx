import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../Modal/Modal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      src: viberr,
      link: 'https://github.com/username/viberr-repo',
      h3: 'Viberr',
      p: 'Streaming App',
      longDescription: 'Viberr is a streaming app that allows users to share and enjoy music with friends. It offers personalized playlists, a social network, and more features that enhance the music experience.'
    },
    {
      src: freshBurger,
      link: 'https://github.com/username/fresh-burger-repo',
      h3: 'Fresh Burger',
      p: 'Hamburger Restaurant',
      longDescription: 'Fresh Burger is a food delivery app that lets you order from a variety of delicious burgers and sides. It includes features like quick ordering, customized orders, and fast delivery tracking.'
    },
    {
      src: hipsster,
      link: 'https://github.com/username/hipsster-repo',
      h3: 'Hipsster',
      p: 'Glasses Shop',
      longDescription: 'Hipsster is an online shop for fashionable eyewear. You can find the latest styles in glasses, sunglasses, and accessories, all with the convenience of home delivery.'
    },
    {
      src: fitLift,
      link: 'https://github.com/username/fitlift-repo',
      h3: 'FitLift',
      p: 'Fitness App',
      longDescription: 'FitLift is a fitness app designed to help users track workouts, monitor progress, and achieve their fitness goals with a variety of guided training plans.'
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      {/* Container for the projects */}
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <motion.div
            key={project.h3}
            layoutId={`modal-${project.h3}`}
            onClick={() => openModal(project)}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }} // Scale on hover
            transition={{ duration: 0.3 }}
            style={{
              transform: selectedProject === project ? 'scale(1.2)' : 'scale(1)', // Scale up the selected project
            }}
          >
            <ProjectCard
              src={project.src}
              h3={project.h3}
              p={project.p}
            />
          </motion.div>
        ))}
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}

export default Projects;
