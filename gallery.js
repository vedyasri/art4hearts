const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "1000";
        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth = "80%";
        bigImg.style.maxHeight = "80%";
        bigImg.style.border = "5px solid white";
        bigImg.style.borderRadius = "10px";
        modal.appendChild(bigImg);
        modal.addEventListener("click", () => {
            modal.remove();
        });
        document.body.appendChild(modal);
    });
});