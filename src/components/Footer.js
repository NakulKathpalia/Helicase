import React from 'react'

const footer = (props) => {
    return (
        <div>
            <div >
  <footer className="pt-3 mt-2">
    <div className=" border-bottom mb-3">
      
    </div>
    <p className={`text-center text-${props.mode === "light" ? "dark" : "light"}`}>&copy; 2021 Company, Inc</p>
  </footer>
</div>
        </div>
    )
}

export default footer
