let marksArray =[];
function addMarks(){
    const input = document.getElementById("marksInput");
    const mark = parseFloat(input.value);

    if (!isNaN(mark)) {
        marksArray.push(mark);
        console.log(`Added: ${mark}`);
    } else {
        console.log("Please enter a valid number!");
    }

    input.value = '';  
}
function calculate(){


if (marksArray.length === 0) {
    console.log("No marks added yet.");
    return;
}
let total=0;
for(let i=0; i<marksArray.length; i++){
    total+=marksArray[i];

}
const average=total / marksArray.length;

const perecntage=(total/ (marksArray.length *100))*100;

console.log("Marks entered:", marksArray);
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", perecntage.toFixed(2) + "%");
}