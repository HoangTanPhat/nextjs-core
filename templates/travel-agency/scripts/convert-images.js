const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ffmpegPath = require("ffmpeg-static").path;

const imageDirectory = "./public/images";

function convertImages() {
  const imageFiles = fs.readdirSync(imageDirectory);

  imageFiles.forEach((file) => {
    const imageType = file.split(".")[1];
    const imagePath = path.join(imageDirectory, file);
    const outputName = `${file}-small.${imageType}`;
    const outputPath = path.join(imageDirectory, outputName);

    const command = `${ffmpegPath} -i "${imagePath}" -vf scale=20:-1 "${outputPath}"`;

    try {
      execSync(command);
      console.log(`Converted ${file} to ${outputName}`);
    } catch (error) {
      console.error(`Error converting ${file}: ${error.message}`);
    }
  });
}

convertImages();
