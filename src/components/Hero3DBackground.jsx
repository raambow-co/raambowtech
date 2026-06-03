import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hero3DBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Transparent background
    scene.background = null; 

    // Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Optimize for mobile displays
    
    if (mountRef.current && !mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. Geometry & Materials
    const geometry = new THREE.IcosahedronGeometry(7, 6);

    // Premium Frosted Glass Material properties
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x930500, // Sangria base for the huge circle
      transmission: 0,
      opacity: 0.10, // Slightly lower opacity since it's huge
      transparent: true,
      roughness: 0.4,
      metalness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    const hugeOrb = new THREE.Mesh(geometry, material);
    scene.add(hugeOrb);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight1.position.set(10, 10, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x95BBEA, 1.5);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // 4. Animation Loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Slow rotation & precise mathematical float
      hugeOrb.rotation.x += 0.001;
      hugeOrb.rotation.y += 0.0015;
      hugeOrb.position.set(9, Math.sin(time * 1.5) * 1.0, -8); // Positioned heavily to the right

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // 5. Responsive Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className="hero-3d-wrapper"
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};

export default Hero3DBackground;
