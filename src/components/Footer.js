import React from 'react';

function Footer() {
return (
<div> 
   <div className={"bg-dark p-4 text-white d-flex align-items-center justify-content-center fixed-bottom"} >
            copyrights @{new Date().getFullYear()} by Aftab Ahmed Creation
        </div>
   </div>
)
}

export default Footer