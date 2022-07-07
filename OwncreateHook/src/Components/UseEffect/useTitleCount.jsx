import React from 'react'
import {useEffect} from 'react'


const useTitleCount = (count) => {
 
    useEffect(() => {
      if (count >= 1) {
        document.title = `Count ${count}`;
      } else {
        document.title = `Count`;
      }
    }, [count]);

}

export default useTitleCount