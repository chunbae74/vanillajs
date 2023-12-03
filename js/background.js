const images = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png"
];

const randomImage = images[Math.random() * images.length | 0];

// js에서 img 태그 생성하기
const image = document.createElement("img");
image.src = `img/${randomImage}`;

// 생성한 태그를 실제 html body에 끼워넣기
document.body.appendChild(image);