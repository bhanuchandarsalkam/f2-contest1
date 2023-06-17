/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.profession=="developer")
    {
        console.log(element.name);
    }
})
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.profession=="developer")
    {
        console.log(element.name);
    }
})
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"} )
  console.log(arr[arr.length-1]);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(function(element){
    if(element.profession!=="admin")
    {
        console.log(element);
    }
})
}

function concatenateArray() {
  //Write your code here, just console.log
  const newarray=[ { id: 5, name: "A", age: "10", profession: "farmer" },
    { id: 5, name: "B", age: "30", profession: "farmer" },
    { id: 2, name: "C", age: "16", profession: "manager" },]

    const concatenatearray=arr.concat(arr.newarray);
    console.log(concatenatearray);

}
