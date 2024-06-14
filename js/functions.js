function spawnGrid(diff) {
   const box = document.getElementById('box');

   switch (diff) {
      case 1: 
         cycleGrid(box, 10, 10);
         break;
      case 2: 
         cycleGrid(box, 9, 9);
         break;
      case 3:
         cycleGrid(box, 7, 7); 
         break;
      default:
         console.log(msg);
   }
}

function cycleGrid(box, r, c) {
   for (let i = 0; i < r; i++) {
      let row = document.createElement("div");
      row.classList.add('row');

      
      for (let j = 0; j < c; j++) {
         let square = document.createElement("div");
         square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center')
         row.appendChild(square);
      }

      box.appendChild(row);
   }
}