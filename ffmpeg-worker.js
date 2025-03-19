importScripts('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.9.7/dist/ffmpeg.min.js');

async function loadFFmpeg() {
    const { createFFmpeg } = FFmpeg;
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
    postMessage({ status: "loaded" });
}

onmessage = async function (event) {
    if (event.data === "load") {
        await loadFFmpeg();
    }
};
