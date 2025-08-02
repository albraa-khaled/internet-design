document.addEventListener("DOMContentLoaded", () => {
  // Create the rectangle
  const rect = document.createElement("div");
  rect.id = "rectangle";
  document.body.appendChild(rect);

  // Define positions (counterclockwise)
  const positions = [
    { bottom: "20px", left: "20px" },     // bottom-left
    { top: "20px", left: "20px" },        // top-left
    { top: "20px", right: "20px" },       // top-right
    { bottom: "20px", right: "20px" }     // bottom-right
  ];

  // Colors to cycle through
  const colors = ["red", "blue", "green", "orange"];

  let index = 0; // current corner index

  const moveBtn = document.getElementById("moveBtn");

  moveBtn.addEventListener("click", () => {
    // Clear all position styles
    rect.style.top = "";
    rect.style.bottom = "";
    rect.style.left = "";
    rect.style.right = "";

    // Apply new position
    const pos = positions[index];
    for (let key in pos) {
      rect.style[key] = pos[key];
    }

    // Apply new color
    rect.style.backgroundColor = colors[index];

    // Move to next corner
    index = (index + 1) % positions.length;
  });
});
