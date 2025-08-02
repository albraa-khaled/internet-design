document.addEventListener("DOMContentLoaded", () => {
  const rect = document.getElementById("Rectangle");
  const button = document.querySelector("button");

  const positions = [
    { bottom: "20px", left: "20px" },     // bottom-left
    { top: "20px", left: "20px" },        // top-left
    { top: "20px", right: "20px" },       // top-right
    { bottom: "20px", right: "20px" }     // bottom-right
  ];

  const colors = ["red", "blue", "green", "orange"];
  let index = 0;

  function moveRectangle() {
    // Reset all position properties
    rect.style.top = "";
    rect.style.bottom = "";
    rect.style.left = "";
    rect.style.right = "";

    // Apply new position
    const pos = positions[index];
    for (let side in pos) {
      rect.style[side] = pos[side];
    }

    // Change color
    rect.style.backgroundColor = colors[index];

    // Move to next position (loop back to start)
    index = (index + 1) % positions.length;
  }

  // Set initial position
  moveRectangle();

  // On button click
  button.addEventListener("click", moveRectangle);
});
