"use client";
import { useState } from "react";

export default function Home(){
 const [file,setFile]=useState(null);
 const upload=async()=>{
  const fd=new FormData();
  fd.append("video",file);
  const res=await fetch("/api/upload",{method:"POST",body:fd});
  const data=await res.json();
  alert(data.message);
 };
 return (
  <div style={{padding:40}}>
   <h1>🎬 VIDEO-RX</h1>
   <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
   <br/><br/>
   <button onClick={upload}>Upload</button>
  </div>
 );
}