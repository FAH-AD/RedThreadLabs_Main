import React, { useRef, useEffect, useState } from "react";
import NavbarFullMenu from "../Navbar-full-menu/navbar-full-menu";

const VideoBackground = () => {
  const videoRef = useRef(null);
  const navbarRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      setIsMobile(width < 768); // mobile breakpoint
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.pageYOffset > 300) {
          navbarRef.current.classList.add("nav-scroll");
        } else {
          navbarRef.current.classList.remove("nav-scroll");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!dimensions) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "200px" : "100vh",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "100%" : `${dimensions.width}px`,
          height: isMobile ? "100%" : `${dimensions.height}px`,
          objectFit: isMobile ? "cover" : "cover", // show whole video on mobile
          backgroundColor: "black", // for letterboxing
          zIndex: 0,
        }}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          color: "black",
          zIndex: 10,
        }}
      >
        <NavbarFullMenu color={"dark"} nr={navbarRef} />
      </div>
    </div>
  );
};

export default VideoBackground;
