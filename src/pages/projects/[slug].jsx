import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa'; // Add this at the top if not already

import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetailsHeader from "../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
import Footer from "../../components/Footer";
import projectData from "../../data/sections/projects.json";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';  
import CallToAction from "../../components/Call-to-action";   


const ProjectDetails = () => {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(true);
  const { slug } = router.query; // Get project slug from URL
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    if (!slug) return; // Wait for slug to be available

    // Find the project based on the slug in URL
    const projectIndex = projectData.findIndex(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (projectIndex === -1) {
      setProject(null); // If not found, set project as null
      return;
    }

    // Set the current project
    setProject(projectData[projectIndex]);

    // Get the next project (loop back to the first if it's the last project)
    const nextIndex = (projectIndex + 1) % projectData.length;
    setNextProject(projectData[nextIndex]);
  }, [slug]);

  useEffect(() => {
    console.log("Project Data: ", project); // Debugging log for the project data
  }, [project]);

  // Loading and error handling for project data
  if (!slug) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <DarkTheme>
      <Navbar />

      <div style={{
  position: 'relative',
  padding: '1rem',
  top:'5rem',
  zIndex: 5,
}}>
  <button
   onClick={() => router.push('/portfolio')}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#111',
      color: '#fff',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      transition: 'transform 0.2s ease',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <FaArrowLeft />
    Back
  </button>
</div>

      {/* Project Details Header */}
      <ProjectDetailsHeader
        backgroundImage={project.image}
        category={project.category}
        title={project.title}
        client={project.client}
        clientUrl={project.clientUrl}
        date={project.date}
        categories={project.categories}
        tags={project.tags}
      />
      {/* Project Introduction */}
      <ProjectDetailsIntroduction
        title={project.introduction.title}
        description={project.introduction.description}
        listItems={project.introduction.listItems}
      />
      {/* Project Images */}

       {project.video ? (
               <div className="video-container" style={{ width: '100vw', height: '56.25vw', maxHeight: '100vh', maxWidth: '177.78vh', margin: 'auto', position: 'relative' }}>
          <ReactPlayer
            url={`https://vimeo.com/${project.video}?title=0&byline=0&portrait=0&sidedock=0`}
            playing={true}
            loop={true}
            muted={isMuted}
            width="100%"
            height="100%"
            controls={true}
            style={{ position: 'absolute', top: 0, left: 0 }}
           
          />

         {/* <button
        onClick={() => setIsMuted(prev => !prev)}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 2
        }}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button> */}
        </div>

        
      ) : (
        <ProjectDetailsImages images={project.images} />
      )}
      {/* Project Description */}
      <ProjectDetailsDescription
        title={project.description.title}
        description={project.description.text}
      />
      {/* Project Video
      <ProjectDetailsVideo
        videoBackground={project.videoBackground}
        videoType={project.videoType}
        videoId={project.videoId}
      /> */}

    
     
      {/* Next Project */}
      {nextProject && (
        <NextProject
          projectImage={nextProject.video? nextProject.showCase : nextProject.image}
          projectTitle={nextProject.title}
          projectSlug={nextProject.title
            .toLowerCase()
            .replace(/\s+/g, "-")}
        />

        
      )}


       
      {/* Footer */}
      <CallToAction/>
      <Footer />

    </DarkTheme>
  );
};

export default ProjectDetails;
