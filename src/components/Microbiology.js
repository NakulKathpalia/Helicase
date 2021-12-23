import React from 'react'

export default function Microbiology(props) {
    return (
        <div>
            <div className={` text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className=" container">
                <h1 className="text-center heading">
                    Microbiology
                    hey this is new content
                </h1>
                <h3
            className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
          >
            Defination :
          </h3>
            </div>
            hey
            
            </div>
        </div>
    )
}
