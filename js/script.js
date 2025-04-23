"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const anchor = document.querySelector(".anchor");
  const anchorTooltip = document.getElementById("anchor-tooltip");
  const audio = document.querySelector("audio");
  const tooltip = document.getElementById("tooltip");

  if (!anchorTooltip || !tooltip) {
    console.error("Tooltip-elementer mangler i DOM'en.");
    return;
  }

  // Fish info array
  const fishInfo = [
    {
      className: "redfish",
      art: "Rød Snapper",
      alder: "2 år",
      latinsknavn: "Lutjanus campechanus",
      længde: "Op til 100 cm",
      vægt: "Typisk 2–4 kg",
      levested: "Mexicanske Golf og det sydøstlige USA",
    },
    { className: "orangefish", art: "Orange Fisk", alder: "3 år" },
    { className: "flatbluefish", art: "Flad Blå Fisk", alder: "1 år" },
    { className: "bluefish", art: "Blå Fisk", alder: "4 år" },
    { className: "codfish", art: "Torsk", alder: "5 år" },
    { className: "tropicalfish", art: "Tropisk Fisk", alder: "2 år" },
  ];

  // Loop gennem fiskene og tilføj click-event
  fishInfo.forEach((fish) => {
    const fishElem = document.querySelectorAll("." + fish.className);

    if (fishElem.length === 0) {
      console.warn(`Ingen elementer fundet for klassen: ${fish.className}`);
      return;
    }

    fishElem.forEach((el) => {
      el.addEventListener("click", (e) => {
        // Dynamisk tooltip-indhold
        tooltip.innerHTML = `
          <strong>${fish.className}</strong><br>
          Art: ${fish.art}<br>
          Alder: ${fish.alder}<br>
          Latinsk navn: ${fish.latinsknavn || "Ikke tilgængelig"}<br>
          Længde: ${fish.længde || "Ikke tilgængelig"}<br>
          Vægt: ${fish.vægt || "Ikke tilgængelig"}<br>
          Levested: ${fish.levested || "Ikke tilgængelig"}
        `;
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX + 20}px`;
        tooltip.style.display = "block";
        tooltip.style.opacity = "1";

        // Skjul tooltip efter 3 sekunder
        setTimeout(() => {
          tooltip.style.opacity = "0";
          tooltip.style.display = "none";
        }, 3000);
      });
    });
  });

  // Tooltip til ankeret
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

  // Klik på ankeret for at starte/stoppe musik
  let isAudioToggling = false;
  anchor.addEventListener("click", () => {
    if (isAudioToggling) return;
    isAudioToggling = true;

    audio.muted = false;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    setTimeout(() => {
      isAudioToggling = false;
    }, 300);
  });
});