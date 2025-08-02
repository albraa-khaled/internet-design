document.addEventListener("DOMContentLoaded", () => {
  const rect = document.getElementById("Rectangle");
  const button = document.querySelector("button");

  const positions = [
    { bottom: "20px", left: "20px" },     
    { top: "20px", left: "20px" },        
    { top: "20px", right: "20px" },       
    { bottom: "20px", right: "20px" }     
  ];

  const colors = ["red", "blue", "green", "yello"];
  let index = 0;

  function moveRectangle() {
    
    rect.style.top = "";
    rect.style.bottom = "";
    rect.style.left = "";
    rect.style.right = "";

    
    const pos = positions[index];
    for (let side in pos) {
      rect.style[side] = pos[side];
    }

    
    rect.style.backgroundColor = colors[index];

    
    index = (index + 1) % positions.length;
  }

  
  moveRectangle();

  
  button.addEventListener("click", moveRectangle);
});
