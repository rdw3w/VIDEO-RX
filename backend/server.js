import express from "express";
import multer from "multer";
import cors from "cors";
import { exec } from "child_process";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("video"), (req, res) => {
  res.json({ message: "Upload successful", file: req.file });
});

app.post("/process", (req, res) => {
  const { filename } = req.body;

  const command = `ffmpeg -i uploads/${filename} -ss 00:00:10 -t 00:00:30 -c copy outputs/clip.mp4`;

  exec(command, (err) => {
    if (err) return res.status(500).send("Processing failed");
    res.json({ message: "Clip generated", output: "outputs/clip.mp4" });
  });
});

app.get("/", (req, res) => {
  res.send("VIDEO-RX Backend Running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));