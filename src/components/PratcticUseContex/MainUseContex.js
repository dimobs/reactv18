import React from "react";
import FunctionContextComponet from "./FunctionContextComponet";
import { ThemeProvider  } from "./ThemeContex";

export default function PracticUseContex() {
    
    return (
        <>
   <h2>Welcome to useContex</h2>
   <ThemeProvider>       
   <FunctionContextComponet />
   </ThemeProvider>
        </>
    )
}