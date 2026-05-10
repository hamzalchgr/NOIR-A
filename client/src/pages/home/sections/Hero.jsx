import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const imgsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !imgsRef.current.includes(el)) {
      imgsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const split = new SplitText(textRef.current, {
      type: "chars,words,lines",
    });

    gsap.from(split.words, {
      y: 10,
      opacity: 0,
      stagger: 0.03,
      duration: 2,
      delay: 2,
      ease: "power3.out",
      filter: "blur(10px)",
    });

    gsap.from(headingRef.current, {
      y: 100,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(imgsRef.current, {
  clipPath: "inset(0 100% 0 0)",
  duration: 6,
  stagger: .03,
  ease: "power3.out"
});

    return () => split.revert();
  }, []);

  return (
    <section className="flex flex-col justify-between h-[70vh] md:h-screen">
      <div
        ref={addToRefs}
        className="relative h-full flex items-center justify-center"
      >
        <div className="absolute top-10 left-20 md:left-45 h-fit w-fit overflow-hidden">
          <div className="h-20 w-20 md:h-34.5 md:w-34.5 overflow-hidden">
            <img
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/EfJFKEIzIncFeSMjyZ0pUDXD0.jpeg?scale-down-to=1024"
              alt="Fine dining dish presentation"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute top-10 right-20 md:right-45 h-fit w-fit overflow-hidden">
          <div className=" h-25 w-25 md:h-34.5 md:w-34.5 overflow-hidden">
            <img
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/vrrCRg3DBX3OQWoPGgu8svMncfU.jpeg?scale-down-to=512"
              alt="Elegant plated meal"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute bottom-15 left-10 md:left-20 h-fit w-fit overflow-hidden">
          <div className=" h-25 w-25 md:h-34.5 md:w-34.5 overflow-hidden">
            <img
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/V8Y4Jg69iylfLH0TNeGnOD3V59o.jpg?scale-down-to=1024"
              alt="Restaurant ambiance"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute bottom-20 md:bottom-20 right-10 md:right-20 h-fit w-fit overflow-hidden">
          <div className=" h-28 w-28 md:h-34.5 md:w-34.5 overflow-hidden">
            <img
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/C18lfIUrR7EgrLF7feRY7t8OwzI.jpeg?scale-down-to=1024"
              alt="Chef preparing food"
              loading="lazy"
            />
          </div>
        </div>

        <p ref={textRef} className="text-center">
          Money can’t buy love, but it can buy <br /> a fancy dinner.
        </p>
      </div>

      <h1
        ref={headingRef}
        className="text-[19.97vw] leading-none whitespace-nowrap tracking-widest"
      >
        NOIRÉA
      </h1>
    </section>
  );
};

export default Hero;
