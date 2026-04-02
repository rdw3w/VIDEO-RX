"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("video", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded!");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🎬 VIDEO-RX</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={upload}>Upload Video</button>
    </div>
  );
}