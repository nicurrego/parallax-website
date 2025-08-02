// src/components/ParallaxLayers.jsx
import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

/**
 * Hook to get scrollY with rAF throttling
 */
const useScrollY = () => {
  const [y, setY] = useState(typeof window !== 'undefined' ? window.scrollY : 0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // initial
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
};

const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * ParallaxLayers
 * Renders background parallax layers (Sora and Tairona) behind the app.
 * Automatically disables on small viewports or reduced-motion preference.
 */
const ParallaxLayers = ({ disableOnMobile = true }) => {
  const scrollY = useScrollY();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if ((disableOnMobile && isMobile()) || prefersReducedMotion()) {
      setEnabled(false);
    }
  }, [disableOnMobile]);

  // springs for each layer; if disabled they stay static
  const soraSpring = useSpring({
    transform: enabled ? `translateY(${scrollY * -0.08}px)` : 'translateY(0px)',
    config: config.slow,
  });
  const taironaSpring = useSpring({
    transform: enabled ? `translateY(${scrollY * -0.35}px)` : 'translateY(0px)',
    config: config.slow,
  });

  // Preload images once
  useEffect(() => {
    const imgs = ['/sora.png', '/tairona.png'];
    imgs.forEach((src) => {
      const i = new Image();
      i.src = src;
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Sora layer (slow) */}
      <animated.div
        style={{
          ...soraSpring,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          willChange: 'transform',
        }}
      >
        <img
          src="/sora.png"
          alt="Sora background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
          decoding="async"
        />
      </animated.div>

      {/* Tairona layer (faster, offset) */}
      <animated.div
        style={{
          ...taironaSpring,
          position: 'absolute',
          top: '70vh',
          left: 140,
          width: '100%',
          height: '145vh',
          willChange: 'transform',
        }}
      >
        <img
          src="/tairona.png"
          alt="Tairona background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'top center',
          }}
          loading="lazy"
          decoding="async"
        />
      </animated.div>
    </div>
  );
};

export default ParallaxLayers;
