'use client'
import { AvatarImage, AvatarExpanded, ExpandArrowButton } from "../Style";
import React from 'react'
import ExpandMore from "../../_images/_expand/expand-more.svg"
import ExpandLess from "../../_images/_expand/expand-less.svg"
import PovOver from "../_PopOver/PovOver";
export default function Avatar({ imgUrl }: { imgUrl: string }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <AvatarExpanded>
            <AvatarImage $imgUrl={imgUrl} />
            <ExpandArrowButton $imgUrl={isExpanded ? ExpandLess.src : ExpandMore.src} onClick={handleClick} />
            {/**
             * 
                   <PovOver hidden={isExpanded}>
            </PovOver>
             */}

        </AvatarExpanded>
    )
}
