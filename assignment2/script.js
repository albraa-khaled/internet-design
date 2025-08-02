document.addEventListener("DOMContentLoaded", () => {
  // Create rectangle and add it to the page
  const rectangle = document.createElement("div");
  rectangle.id = "rectangle";
  document.body.appendChild(rectangle);

  // Corner positions in counterclockwise order
  const positions = [
    { bottom: "20px", left: "20px" },     // Bottom-left
    { top: "20px", left: "20px" },        // Top-left
    { top: "20px", right: "20px" },       // Top-right
    { bottom: "20px", right: "20px" }     // Bottom-right
  ];

  const colors = ["red", "blue", "green", "orange"];
  let current = 0;

  document.getElementById("moveBtn").addEventListener("click", () => {
    // Move to the next corner
    current = (current + 1) % positions.length;

    // Clear all position styles
    rectangle.style.top = "";
    rectangle.style.bottom = "";
    rectangle.style.left = "";
    rectangle.style.right = "";

    // Apply the current position
    const pos = positions[current];
    for (let key in pos) {
      rectangle.style[key] = pos[key];
    }

    // Apply the current color
    rectangle.style.backgroundColor = colors[current];
  });
});
