// import "locomotive-scroll/dist/locomotive-scroll.css";

// import { AnimatePresence } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";


// import Loader from "../components/Home/HomeComponents/Loader";
// import ScrollTriggerProxy from "../components/Home/HomeComponents/ScrollTriggerProxy";
// import About from "../components/Home/HomeSections/About";
// import Footer from "../components/Home/HomeSections/Footer";
// import Home from "../components/Home/HomeSections/Home";
// import Marquee from "../components/Home/HomeSections/Marquee";
// import NewArrival from "../components/Home/HomeSections/NewArrival";
// import Shop from "../components/Home/HomeSections/Shop";

// function App() {
//   // useLocoScroll();
//   const containerRef = useRef(null);
//   const [Loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoaded(true);
//     }, 3000);
//   }, []);

//   return (
//     <>
//         <LocomotiveScrollProvider
//           options={{
//             smooth: true,
//             // ... all available Locomotive Scroll instance options
//             smartphone: {
//               smooth: true,
//             },
//             tablet: {
//               smooth: true,
//             },
//           }}
//           watch={
//             [
//               //..all the dependencies you want to watch to update the scroll.
//               //  Basicaly, you would want to watch page/location changes
//               //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
//             ]
//           }
//           containerRef={containerRef}
//         >
//           <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
//           <main className="App" data-scroll-container ref={containerRef}>
//             <ScrollTriggerProxy />
//             <AnimatePresence>
//               {Loaded ? null : <Loader />}

//               <Home key="home" />
//               <About key="about" />
//               <Shop key="Shop" />
//               <Marquee key="marquee" />
//               <NewArrival key="new arrival" />
//               <Footer key="Footer" />
//             </AnimatePresence>
//           </main>
//         </LocomotiveScrollProvider>
//     </>
//   );
// }

// export default App;