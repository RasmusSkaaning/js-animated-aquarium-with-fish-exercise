"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const anchor = document.querySelector(".anchor");
    const anchorTooltip = document.getElementById("anchor-tooltip");
    const audio = document.querySelector("audio"); // All JavaScript goes inside here
    const tooltip = document.getElementById("tooltip");
   
    fishInfo.forEach((fish) => {
        const fishElem = document.querySelectorAll("." + fish.className);
      
        fishElem.forEach((el) => {
          el.addEventListener("click", (e) => {
            tooltip.innerText = `${fish.art} — Alder: ${fish.alder}`;
            tooltip.style.top = `${e.pageY - 40}px`;
            tooltip.style.left = `${e.pageX + 20}px`;
            tooltip.style.opacity = "1";
            tooltip.style.fontSize = "1.15rem";
      
            // Hide tooltip after 3 seconds
            setTimeout(() => {
              tooltip.style.opacity = "0";
            }, 3000);
          });
        });
      });
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

      anchor.addEventListener("click", () => {
        audio.muted = false;
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });
   
  });