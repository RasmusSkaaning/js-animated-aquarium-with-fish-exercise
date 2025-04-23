"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const anchor = document.querySelector(".anchor");
    const anchorTooltip = document.getElementById("anchor-tooltip");
    const audio = document.querySelector("audio"); // All JavaScript goes inside here

    anchor.addEventListener("mouseenter", () => {
        const rect = anchor.getBoundingClientRect();
        anchorTooltip.style.opacity = "1";
        anchorTooltip.style.left = `${rect.left + 60}px`;
        anchorTooltip.style.top = `${rect.top - 30}px`;
      
        if (audio.paused) {
          anchorTooltip.innerText = "Klik for at starte musikken";
        } else {
          anchorTooltip.innerText = "Klik for at stoppe musikken";
        }
      });
      anchor.addEventListener("mouseleave", () => {
        anchorTooltip.style.opacity = "0";
      });
  });