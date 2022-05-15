import React from 'react'
import { useState } from "react";
const RulesHooks = () => {
    const [Myname, setMyName] = useState(`thapa technical`);
  return (
    <div>
        <h1>{Myname}</h1>
    </div>
  )
}

export default RulesHooks