const camButton = document.querySelector("[data-video-botao]");
const camField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const picButton = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const sendPicBtn = document.querySelector("[data-enviar]");

let imageURL = "";

camButton.addEventListener('click', async function () {
    const videoStart = await navigator.mediaDevices.getUserMedia({video: true, audio:false })

    camButton.style.display = "none";
    camField.style.display = "block";

    video.srcObject = videoStart;
})

picButton.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL("image/jpeg");

    camField.style.display = "none";
    message.style.display = "block";

})

sendPicBtn.addEventListener('click', () => {
    const dataReceived = localStorage.getItem("cadastro");
    const dataConverted = JSON.parse(dataReceived);

    dataConverted.image = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(dataConverted));

    window.location.href = './abrir-conta-form-3.html';
})