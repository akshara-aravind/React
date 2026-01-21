import { useState } from "react"

export default function TextExpander(
    {
    collapsedNumWorkds='10',
     expandButtonText ='show more',
     collapseButtonText='show less',
     buttonColor ='#1f09cd',
     children,
     className,
     expanded=false,
    }){
        const [isExapanded,setIsExpanded] = useState(expanded)

        const displayText = isExapanded ? children :children.split(' ').slice(0,collapsedNumWorkds).join(' ')+'...'

        const buttonStyle={
            backgroundColor:'none',
            border:'none',
            cursor:'pointer',
            marginLeft:'6px',
            color:buttonColor
        }
    return(
        <div className={className}>
            <span>{displayText}</span>
            <button style={buttonStyle} onClick={()=> setIsExpanded(exp=> !exp)}>{isExapanded ? collapseButtonText :expandButtonText}</button>
        </div>
    )
}