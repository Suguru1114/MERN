import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "@/pages/CreatePage";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/Navbar";



function App() {

    return (

        <Box minH={"100vh"}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />


        </Routes>
        </Box>
    );
    }
export default App;

// import React from "react";
// import Navbar from "./Navbar";
// import HomePage from "../pages/HomePage";

// function App() {
//   return (
//     <>
//       {/* <div>Hello from App</div> */}
//       <Navbar />
//       <HomePage />
//     </>
//   );
// }

// export default App;
