import { Flex, Text, Image, Heading, Box } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Test() {
  const container = useRef(null);
  const textWrap = useRef(null);
  const imagesWrap = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals(" ScrollTrigger", ScrollTrigger);

      gsap.set([image1.current, image2.current, image3.current], {
        zIndex: (i, target, targets) => targets.length - i
      });

      let images = [image1.current, image2.current];
      // let imagenes = gsap.utils.toArray(images);

      images.forEach((image, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            // start: () => "top -" + window.innerHeight * (i + 0.33),
            start: () => "top -" + window.innerHeight * i,
            // start: () => "top -" + window.innerHeight * (i + 0.5),
            // start: () => "top -" + window.innerHeight * (i + 1.0),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            // markers: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true
          }
        });

        tl.fromTo(
          image,
          {
            height: () => {
              return "1500%";
            }
          },
          {
            height: () => {
              return "0%";
            }
          }
        );
      });

      gsap.set([text1.current, text2.current, text3.current], {
        zIndex: (i, target, targets) => targets.length - i
      });

      let texts = [text1.current, text2.current, text3.current];

      texts.forEach((text, i) => {
        let lines = text.querySelectorAll("p");

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: true,
            markers: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true
          }
        });

        tl.fromTo(
          lines[0],
          {
            y: () => {
              return "25vh";
            },
            opacity: () => {
              return 0;
            }
          },
          {
            y: () => {
              return "0vh";
            },
            opacity: () => {
              return 1;
            }
          }
        )
          .fromTo(
            lines[1],
            {
              y: () => {
                return "25vh";
              },
              opacity: () => {
                return 0;
              }
            },
            {
              y: () => {
                return "0vh";
              },
              opacity: () => {
                return 1;
              }
            }
          )
          .fromTo(
            lines[2],
            {
              y: () => {
                return "25vh";
              },
              opacity: () => {
                return 0;
              }
            },
            {
              y: () => {
                return "0vh";
              },
              opacity: () => {
                return 1;
              }
            }
          )
          .fromTo(
            lines[3],
            {
              y: () => {
                return "25vh";
              },
              opacity: () => {
                return 0;
              }
            },
            {
              y: () => {
                return "0vh";
              },
              opacity: () => {
                return 1;
              }
            }
          )
          .to(text, {
            opacity: () => {
              return 0;
            }
          });
      });

      ScrollTrigger.create({
        trigger: container.current,
        scrub: true,
        // markers: true,
        pin: true,
        start: () => "top top",
        end: () => "+=" + images.length * window.innerHeight,
        invalidateOnRefresh: true
      });
    }
    return () => {};
  }, []);

  return (
    <>
      <Box h="100vh"></Box>
      <Flex ref={container} h="100vh" bgColor="#000" color="#fff">
        <Flex
          w="50%"
          direction="column"
          h="100vh"
          position="relative"
          overflow="hidden"
          ref={textWrap}
        >
          <Box
            h="100%"
            ref={text1}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
            // h="100%"
            w="100%"
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box>
              <Text>Text 1</Text>
              <Text>Text 2</Text>
            </Box>
            <Box>
              <Text>Text 3</Text>
              <Text>Text 4</Text>
            </Box>
          </Box>
          <Box
            h="100%"
            ref={text2}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
            // h="100%"
            w="100%"
            color="#294"
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box>
              <Text>Text 1</Text>
              <Text>Text 2</Text>
            </Box>
            <Box>
              <Text>Text 3</Text>
              <Text>Text 4</Text>
            </Box>
          </Box>
          <Box
            h="100%"
            ref={text3}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
            // h="100%"
            w="100%"
            color="#923"
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box>
              <Text>Text 1</Text>
              <Text>Text 2</Text>
            </Box>
            <Box>
              <Text>Text 3</Text>
              <Text>Text 4</Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          w="50%"
          direction="column"
          ref={imagesWrap}
          position="relative"
          overflow="hidden"
          h="100vh"
        >
          <Image
            src={`https://picsum.photos/300/300`}
            maxH="100vh"
            w="100%"
            h="100%"
            objectFit="cover"
            ref={image1}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
          />
          <Image
            src={`https://picsum.photos/200/300`}
            maxH="100vh"
            w="100%"
            h="100%"
            objectFit="cover"
            ref={image2}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
          />
          <Image
            src={"https://picsum.photos/400/300"}
            maxH="100vh"
            w="100%"
            h="100%"
            objectFit="cover"
            ref={image3}
            position="absolute"
            left="0%"
            top="0%"
            right="0%"
            bottom="0%"
          />
        </Flex>
      </Flex>
      <Box h="100vh" bgColor="#460"></Box>
    </>
  );
}