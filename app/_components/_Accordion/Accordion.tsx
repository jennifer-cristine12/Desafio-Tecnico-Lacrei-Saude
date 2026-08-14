'use client'
import React from 'react'

import { AccordionContainer, AccordionContent, AccordionHeader } from "../Style"
export default function Accordion(props: any) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <AccordionContainer>

            <AccordionHeader onClick={() => setIsOpen(!isOpen)}><p>{props.HeaderText}</p><p>{isOpen ? "+" : "-"}</p></AccordionHeader>
            <AccordionContent hidden={isOpen}>
                {props.children}
            </AccordionContent>


        </AccordionContainer>
    )
}
