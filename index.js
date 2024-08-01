document.addEventListener("DOMContentLoaded", () => {
    // Toggle video visibility on button click
    const playButton = document.querySelector(".home__button");
    const video = document.querySelector("#homeVideo");

    playButton.addEventListener("click", () => {
        if (video.style.display === "none" || video.style.display === "") {
            video.style.display = "block";
            video.play();
        } else {
            video.style.display = "none";
            video.pause();
        }
    });
});