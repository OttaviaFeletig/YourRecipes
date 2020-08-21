import React, {useState} from 'react';


const ToggleBookmark = () => {

  const [selected, toggleSelected]=useState(false);



  return(
<svg className={`toggleBookmark ${selected ? "toggleBookmark-active" : ""}`} onClick={()=>toggleSelected(!selected)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24zm-14 1h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2z"/></svg>
  )
}

export default ToggleBookmark;
