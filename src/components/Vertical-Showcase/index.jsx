import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import projectsData from "../../data/sections/homepageProjects.json";

const VerticalShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section style={{ display: "grid", gap: "2rem" }}>
      {projectsData.slice(0, 3).map((project, index) => {
        const projectSlug = `/projects/${encodeURIComponent(
          project.title.toLowerCase().replace(/\s+/g, "-")
        )}`;

        return (
          <motion.div
            key={project.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              cursor: "pointer",
              height: isMobile ? "400px" : "100vh", // mobile height fixed, desktop full vh
            }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover="hover"
          >
            <Link href={projectSlug}>
              <a
                style={{
                  display: "block",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {project.video ? (
                  <ReactPlayer
                    url={`https://vimeo.com/${project.video}`}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <div
                    style={{
                      backgroundImage: `url("${project.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}

                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                >
                  <motion.div
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  
                  </motion.div>
                </motion.div>
              </a>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
};

export default VerticalShowcase;
