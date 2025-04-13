export const planetVariants = (direction) => ({
  hidden: {
    x: direction === "right" ? "-300%" : "300%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.5, // Slightly longer duration
      delay: 0.5, // Start a bit earlier
    },
  },
});

export const cardVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? 50 : 0,
    opacity: 0,
  }, // Start with opacity 0 and move slightly down
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: index * 0.5, // Delay each card based on index
    },
  }),
});

export const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 500}px at 100% 50%)`, //circle(radius at x-position y-position)
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 100% 0)", // Start small at top-right
    opacity: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const fadeIn = (direction) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    opacity: 0,
  }, // Start with opacity 0 and move slightly down
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: index * 0.5, // Delay each card based on index
    },
  }),
});

export const footerVariants = (direction) => ({
  hidden: {
    y: direction === "up" ? 100 : -100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
    }
  }
})
