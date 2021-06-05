//HOME PAGE ANIMATION
export const animationOne = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -400,
      scale: 0.3
    },
    end: {
    x: 0,
    opacity: 0
      }
  };
  
  export const animationTwo = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: 400,
      scale: 0.3
    },
    end: {
    x: 0,
    opacity: 0
      }
  };


  // SERVICES PAGE

  export const animationThree = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: '100vw',
      scale: 0.7
    },
    end: {
    y: '100vh',
    opacity: 0
      }
  };

  // PROJECTS
  export const animationFour = {
    in: {
      opacity: 1,
      x: 0,
      y:0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -400,
      y: -400,
      scale: 0.7
    },
    end: {
    opacity: 0
      }
  };

  //CONTACT
  export const animationFive = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: '-100vh',
      scale: 0.3
    },
  };
  
  export const transition = {
    duration: 0.4
  };