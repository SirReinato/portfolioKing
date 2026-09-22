import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente wrapper reutilizável para animações de entrada no viewport.
 * Suporta direções: up, down, left, right e delay customizável.
 */
const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className,
  style,
  ...rest
}) => {
  // Mapeamento de direções para offsets iniciais
  const directionOffset = {
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const offset = directionOffset[direction] || directionOffset.up;

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
