"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface PreloadVideoProps {
  src: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  bgColor?: string;
}

export function PreloadVideo({
  src,
  poster,
  alt,
  width,
  height,
  className = "",
  priority = false,
  bgColor = "transparent",
}: PreloadVideoProps) {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();

      const handleCanPlay = () => {
        setVideoReady(true);
        video.play().catch(() => {
          // Autoplay blocked, still show video
          setVideoReady(true);
        });
      };

      video.addEventListener("canplaythrough", handleCanPlay);
      return () => video.removeEventListener("canplaythrough", handleCanPlay);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: `${width}/${height}`, backgroundColor: bgColor }}
    >
      {/* Static image shown until video is ready */}
      <Image
        src={poster}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      {/* Video preloaded and shown when ready - scaled slightly to crop black edges */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "scale(1.04)" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
