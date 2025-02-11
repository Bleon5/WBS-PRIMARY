const displayMessagefunc = function () {
  const messageContainer = document.getElementById("message-container");
  const displayedMessage = document.createElement("div");
  displayedMessage.textContent =
    "Special Offer: Get 20% off your next purchase";
  displayedMessage.classList.add(
    "bg-green-200",
    "p-10",
    "font-bold",
    "text-2xl",
    "text-center",
    "border-2",
    "border-black",
    "rounded-xl",
    "transition-opacity",
    "opacity-0"
  );
  messageContainer.appendChild(displayedMessage);
  setTimeout(() => {
    displayedMessage.classList.remove("opacity-0");
    displayedMessage.classList.add("opacity-100");
  }, 50);
};

setTimeout(displayMessagefunc, 3000);
