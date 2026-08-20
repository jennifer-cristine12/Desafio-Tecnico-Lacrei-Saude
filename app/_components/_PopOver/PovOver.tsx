import React from 'react'
import { ExpandPopOver } from '../Style'
export default function PovOver(props: any) {
    return (
        <ExpandPopOver hidden={props.hidden}>
            {props.children}
        </ExpandPopOver>
    )
}
