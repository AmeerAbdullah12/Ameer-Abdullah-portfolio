import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DockLock.ai",
      description:
        "A fully containerized Next.js and NestJS application using Docker, integrating OpenStreetMap API, real-time activity reporting, and complete developer documentation for onboarding.",
      image: "/DockLock.jpg",
      tech: ["Nest.js", "Next.js", "TypeScript", "Docker", "OpenStreetMap API"],
      github: "",
      live: "https://doclock.ai",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce platform generating $30,000 in monthly revenue, implementing REST API backend, Stripe payment integration, and a real-time admin dashboard with automated notification pipelines.",
      image: "/e-commerce.JPG",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
      github: "",
      live: "https://taseeofficial.com",
    },
    {
      title: "Gaming Portal Dashboard",
      description:
        "A Game Management portal serving 1,000+ daily active users with RBAC implemented for 4-tier user hirerachy, building React and Next.js frontend, Node.js backend APIs, and JWT authentication from scratch through full production deployment on AWS.",
      image: "/gaming-portal.png",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "JWT",
      ],
      live: "https://casinomonsters.vip/login",
    },
    {
      title: "Payment Portal for Gaming Portal",
      description:
        "A secure payment portal for the Gaming Portal, built with Stripe Integration allowing users to manage their transactions and account balance with real-time updates and transaction history.",
      image: "/paymentPortal.jpg",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "PostgreSQL",
        "Stripe",
      ],
      live: "https://main.dla4cz2vcdwio.amplifyapp.com",
    },
    {
      title: "Internship Management System",
      description:
        "A comprehensive internship management system for CUST that streamlines the process of managing internships, applications, and placements. It features user-friendly interfaces for both students and employers, allowing for efficient communication and tracking of internship opportunities.",
      image: "/backgroundImage.jpg",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/AmeerAbdullah12/InternhsipPortal"
    },
    {
      title: "Rehydr8 - A company Website",
      description:
        "A company website for Rehydr8, a water bottle manufacturer and retailer, showcasing their products and vision.",
      image: "/water.jpg",
      tech: ["React", "TypeScript", "MongoDB", "Express"],
      live: "https://rehydr8.vercel.app",
    },
    {
      title: "New Tab Chrome Extension",
      description:
        "A Chrome browser extension using Chrome Extension APIs and JavaScript that overrides the default New Tab page with minimalist countdown and asynchronously fetched quote, demonstrating direct hands-on experience with browser extension architecture, manifest configuration, and browser runtime APIs.",
      image: "/NewTabExtension.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Chrome local Storage"],
      github: "https://github.com/AmeerAbdullah12/NewTabExtension",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.title === "Gaming Portal Dashboard" || "DockLock.ai"
                      ? "object-cover"
                      : ""
                  } group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    objectPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 shadow-lg"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 shadow-lg"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AmeerAbdullah12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
