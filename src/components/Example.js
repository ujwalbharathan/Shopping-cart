import React from 'react'
import { useState,useEffect } from 'react'

export const Example = () => {
    const [count,setcount]=useState(0)
    useEffect(() => {
       console.log("use effect hook");
       document.title=`user clicked the button ${count} times`
    })
    return (
        <div>
            <button onClick={()=>{setcount(count+1)}}>Click</button>
            
        </div>
    )
}
