document.addEventListener("DOMContentLoaded", () => {
  // Create rectangle and add it to body
  const rectangle = document.createElement("div");
  rectangle.id = "rectangle";
  document.body.appendChild(rectangle);

  // Define the positions in counterclockwise order
  const positions = [
    { bottom: "20px", left: "20px" },     // bottom-left (initial)
    { top: "20px", left: "20px" },        // top-left
    { top: "20px", right: "20px" },       // top-right
    { bottom: "20px", right: "20px" }     // bottom-right
  ];

  const colors = ["red", "blue", "green", "orange"];
  let current = 0;

  // On each button click
  document.getElementById("moveBtn").addEventListener("click", () => {
    // Move to next corner
    current = (current + 1) % positions.length;

    // Reset all position properties
    rectangle.style.top = "";
    rectangle.style.bottom = "";
    rectangle.style.left = "";
    rectangle.style.right = "";

    // Apply new position
    const pos = positions[current];
    for (let key in pos) {
      rectangle.style[key] = pos[key];
    }

    // Change color
    rectangle.style.backgroundColor = colors[current];
  });
});
