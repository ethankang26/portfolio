"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Mail, Download, Code, Palette, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "AI-Driven Mortgage Chatbot",
      description:
        "AI chatbot with automated Reddit scraper that collects data from r/FirstTimeHomeBuyer every hour, stores it in Supabase, and enables users to query real mortgage experiences through Supabase MCP integration",
      tech: ["Playwright", "Browserbase", "Stagehand", "Supabase", "AI/ML"],
      github: "https://github.com/ethankang26/chatbot",
      demo: "#",
    },
    {
      title: "Simulated Factory Automation System",
      description:
        "Node.js backend with configurable rule engine and React dashboard for simulating industrial automation",
      tech: ["Node.js", "Express", "React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/ethankang26/simulated-factory-dashboard",
      demo: "#",
    },
    {
      title: "Study Planner & Deadline Tracker",
      description:
        "Full-stack task management web app with inline editing, filtering, and overdue detection for students",
      tech: ["Express.js", "SQLite", "Mustache.js", "Bootstrap", "JavaScript"],
      github: "https://github.com/ethankang26/Study-Planner-Deadline-Tracker",
      demo: "#",
    },
    {
      title: "Stop Light Control System",
      description: "PLC-based traffic management system with SCADA integration and HMI interface for real-time control",
      tech: ["PLC", "Ladder Logic", "SCADA", "HMI", "Industrial Automation"],
      github: "https://github.com/ethankang26",
      demo: "#",
    },
  ]

  const experience = [
     {
      title: "Controls Systems Engineer Intern",
      company: "General Motors",
      period: "September 2025 - Present",
      description:
        "Developing and optimizing control systems for automotive manufacturing, supporting PLC programming, troubleshooting, and process improvements to enhance efficiency and reliability.",
    },
    {
      title: "Software Engineer",
      company: "Unrepped",
      period: "May 2025 - August 2025",
      description:
        "Leading development of AI-driven chatbots for mortgage applications and building data pipelines for real-world mortgage insights using modern web technologies and automation tools.",
    },
    {
      title: "Junior Engineer Intern",
      company: "RuskCast",
      period: "May 2024 - Aug 2024",
      description:
        "Optimized website performance by ~20% and improved casting model manufacturability by 15% through front-end development and 3D design using Fusion360 and Geomagic Design X.",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ethan Kang
              </div>

              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === section ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Ethan Kang
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Automation Engineer & Full Stack Developer
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              McMaster University student passionate about automation, AI-driven solutions, and building scalable
              applications. Currently developing innovative mortgage technology and industrial automation systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="/ethan_kang_resume.pdf" download="ethan_kang_resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mt-12">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/ethankang26" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/ethangyukang" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="mailto:EthanKang26@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Software Automation Engineering student with a passion for AI and industrial systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Currently pursuing Software Automation Engineering at McMaster University (2021-2026), I'm passionate
                  about bridging the gap between software development and industrial automation. My experience spans
                  from AI-driven applications to PLC programming and 3D design optimization.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Through my co-op experiences at Unrepped and RuskCast, I've developed expertise in full-stack
                  development, automation systems, and performance optimization. I enjoy tackling complex problems that
                  require both technical depth and creative solutions.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">4+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Major Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Co-op Terms</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h4 className="font-semibold mb-2">Automation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Industrial systems and PLC programming</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Palette className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                    <h4 className="font-semibold mb-2">AI Solutions</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Building intelligent applications</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Optimization</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Performance and process improvement</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                    <h4 className="font-semibold mb-2">Full Stack</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">End-to-end application development</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Technologies I work with to build innovative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Programming Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "Python", "C++", "HTML", "CSS", "MATLAB"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "React Native",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "jQuery",
                    "Mustache.js",
                    "LangChain",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Databases & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {["SQLite", "Supabase", "GitHub Actions", "Playwright", "Browserbase", "Stagehand"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-orange-600 dark:text-orange-400">CAD & Design</h3>
                <div className="flex flex-wrap gap-3">
                  {["SolidWorks", "Fusion360", "AutoCAD", "Revit", "Geomagic Design X", "CATIA"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-600 dark:text-red-400">Industrial & Automation</h3>
                <div className="flex flex-wrap gap-3">
                  {["PLC Programming", "Ladder Logic", "SCADA", "HMI", "UML", "Cisco IOS", "Excel"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Some of my recent work spanning automation and AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
               <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <CardContent className="p-6">
    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs">
          {tech}
        </Badge>
      ))}
    </div>

    <div className="flex gap-3">
      <Button variant="outline" size="sm" className="w-full" asChild>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" />
          View Code
        </a>
      </Button>
    </div>
  </CardContent>
</Card>

              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey and key achievements</p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">McMaster University</p>
                  <p className="text-gray-600 dark:text-gray-300">Software Automation Engineering, Co-op</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2021 - Dec 2026 | Hamilton, ON</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Interested in automation, AI, or full-stack development? I'd love to discuss opportunities and collaborate
              on innovative projects.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">EthanKang26@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/ethangyukang</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Github className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">github.com/ethankang26</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300">
                📍 Niagara Falls, ON | Available for co-op opportunities Fall 2025
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a href="mailto:EthanKang26@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">© 2024 Ethan Kang. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
