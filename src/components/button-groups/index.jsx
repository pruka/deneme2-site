import { useState } from "react";
import useMedia from "../../hooks/use-media.jsx";
import Button from "../button/index.jsx";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { HiDotsCircleHorizontal } from "react-icons/hi";


export default function ButtonGroups ({buttons}) {
    const isMobile = useMedia()
    const [open, setOpen] = useState(false)
    const preparaButtons = (
        buttons.map((button, index) => {

        const attributes = {...button.attributes}
        attributes.onClick = (e) => {
            setOpen(false)
            button?.attributes?.onClick?.(e)
        }

        return (
            <Button key={index} {...attributes}>
            {button.title}
            </Button>
        )

        })
    )

    if(isMobile) {
        return (
            <>
                <button 
                    onClick={() => setOpen(!open)}
                    className="-mr-6"
                >
                    
                    <HiDotsCircleHorizontal className="text-4xl"/>
                </button>
                <BottomSheet open={open}>
                    <nav className="flex flex-col m-auto p-4 space-y-5 w-52">
                        {preparaButtons}
                    </nav>
                </BottomSheet>
            </>
        )
    }

    return (
        <nav className="space-x-5"> 
            {
                preparaButtons
            }
        </nav>
    )
}