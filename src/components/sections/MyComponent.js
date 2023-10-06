// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const SVG = styled.svg`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;

//   .line {
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//     animation: dash 5s linear forwards;
//   }

//   @keyframes dash {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }
// `;

// const MyComponent = () => {
//   return (
//     <Container>
//       <SVG viewBox="0 0 100 100">
//         <line className="line" x1="0" y1="0" x2="100" y2="100" stroke="#61dafb" stroke-width="2" />
//       </SVG>
//     </Container>
//   );
// };

// export default MyComponent;

// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const SVG = styled.svg`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;

//   .line {
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//     animation: dash 5s linear forwards;
//   }

//   @keyframes dash {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }
// `;

// const MyComponent = () => {
//   return (
//     <Container>
//       <SVG viewBox="0 0 100 100">
//         <path className="line" d="M20,20 L80,80" stroke="#61dafb" stroke-width="2" fill=".red" />
//       </SVG>
//     </Container>
//   );
// };

// export default MyComponent;
// import React from 'react';
// import styled from 'styled-components';
// import { useRef, useEffect } from 'react';

// const HTML = styled.html`
//   scroll-behavior: smooth;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const SVG = styled.svg`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;

//   .line {
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//   }
// `;

// const MyComponent = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const line = entry.target;
//           const length = line.getTotalLength();
//           line.style.strokeDashoffset = length;
//           line.style.transition = 'stroke-dashoffset 2s linear';
//         }
//       });
//     });

//     observer.observe(ref.current);
//   }, []);

//   return (
//     <HTML>
//       <Container>
//         <SVG viewBox="0 0 100 100">
//           <path ref={ref} className="line" d="M20,20 L80,80" stroke="#61dafb" stroke-width="2" fill="none" />
//         </SVG>
//       </Container>
//     </HTML>
//   );
// };

// export default MyComponent;
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* position: relative; */
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const MyComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const line = entry.target;
          const length = line.getTotalLength();
          const viewportLength = entry.rootBounds.height;
          const intersectionLength = entry.boundingClientRect.height;
          const offset = (viewportLength - intersectionLength) / viewportLength * length;
          line.style.strokeDasharray = length;
          line.style.strokeDashoffset = offset;
          gsap.to(line, {
            duration: 2,
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: line,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
            onUpdate: () => {
              const strokeOffset = line.style.strokeDashoffset;
              line.style.stroke = `hsl(${strokeOffset / length * 360}, 100%, 50%)`;
            },
          });
        }
      });
    });

    observer.observe(ref.current);
  }, []);

  return (
    <Container>
      <SVG viewBox="0 0 100 100">
        <path ref={ref} d="M20,20 L80,80" stroke="#61dafb" stroke-width="2" fill="none" />
      </SVG>
    </Container>
  );
};

export default MyComponent;


