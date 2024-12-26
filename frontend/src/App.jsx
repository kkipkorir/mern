import { Box, useColorModeValue } from "@chakra-ui/react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Homepage } from "./pages/Homepage"
import { Createpage } from "./pages/Createpage"

function App() {
  
  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<Createpage/>}/>
      </Routes>
      </Box>
    </>
  )
}

export default App
