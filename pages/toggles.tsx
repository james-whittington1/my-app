import { LayoutGroup, motion } from "framer-motion"
import { useState } from "react"

export default function TogglePage() {
    const [active, setActive] = useState<number>();

    

    return(
        <div className="h-screen flex items-center justify-center">
<div className="flex flex-col gap-4">

<LayoutGroup> 
    <ToggleContent active={active===0} index={0} activate={setActive} header="header 1" content="content content content. 1" />
    <ToggleContent active={active===1} index={1} activate={setActive} header="header 2" content="content content content. 2" />
    <ToggleContent active={active===2} index={2} activate={setActive} header="header 3" content="content content content. 3" />
</LayoutGroup>
</div>
        </div>
    )
 
}

type ToggleContentProps = {
    header:string;
    content:string;
    activate: (id:number | undefined)=>void;
    active:boolean;
    index:number;
}

function ToggleContent({ header, content, activate, index, active }:ToggleContentProps) {
 
    return (
      <motion.div
        layout
        className="group "
        onClick={() => activate(active ? undefined : index)}
      >
        <div className="flex items-center relative">

        <motion.h2 className="text-6xl font-bold" layout>{header}</motion.h2>
        {active && 
        <motion.div layoutId="drip" className="max-sm:-inset-y-1 max-sm:-inset-x-6 sm:h-6 sm:w-6 rounded-full border-blue-300 border sm:bg-blue-300 sm:-left-12 absolute" layout></motion.div>
        }
        </div>
        {active ?  
        <motion.div layout animate={{opacity:1}} className="py-4 opacity-0">
            content
        </motion.div> 
            : null} 
      </motion.div>
    )
  }
  
 
