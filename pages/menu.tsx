import { LayoutGroup, motion } from "framer-motion"
import React, { useState } from "react"

export default function TogglePage() {
    const [open, setOpen] = useState<number>(0);

    

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="fixed items-center inset-x-0 h-32 top-0 justify-center gap-4 flex items-center border-b bg-white/5 border-white/20">
                <motion.strong className="relative" onHoverStart={()=>setOpen(1)}>item 1 {open === 1 && <Menu header="Menu 1"><div className="w-64"></div></Menu>} </motion.strong>
                <motion.strong className="relative" onHoverStart={()=>setOpen(2)}>item 2  {open === 2 && <Menu header="Menu 1">{'Hi'}</Menu>}</motion.strong>
            </div>

<div className="flex flex-col gap-4">

 
</div>
        </div>
    )
 
}

type MenuProps = {
    header:string;
    children?:any[];
    
    
}

function Menu({ header, children}:MenuProps) {
 
    return (
      <motion.div
        layout
   
        className="group absolute font-normal pt-16 text-white p-4 text-center "
       
      >
        <motion.div layoutId='shadow' className="inset-0 top-12 absolute bg-blue-300/20 border-2 border-blue-300 z-[-1] rounded-lg"></motion.div>
        <motion.h2 animate={{opacity:1}} className="text-lg font opacity-0 ">{header}</motion.h2>
        <motion.div animate={{opacity:1}} style={{opacity:0}}>

        {children}
        </motion.div>
      </motion.div>
    )
  }
  
 