import React, { useEffect, useState } from "react";



export function useOutsideHook(ref,handler){
  useEffect(()=>{

    function listener(event){
      
    }

  },[ref,handler])
}



const UseOnclickOutside = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      UseOnclickOutside
      <div className="">
        {show ? (
          <div className="text-2xl font-semibold">Toggel</div>
        ) : (
          <button onClick={() => setShow(true)}>show content</button>
        )}
      </div>
    </div>
  );
};

export default UseOnclickOutside;
