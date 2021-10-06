// var text : string = "Hello world!";
// console.log(text);

//Basic ex 1
// var sumRows: number[];
// for (let i = 1; i <= 10; i++) {
//     var sum: number = 0;
//     for (let j = 1; j <= 10; j++) {
//         console.log(j+"x"+i+"="+ i * j );
//     sum += i * j;
//     } 
// }
//Basic ex 2

//let myArray:Array<{fName:string,lName:string}>=[{fName:"Elnaz",lName:"mnt"}]

const obj: { fName: string, lName: string, printMsg: Function } = {
    fName: "Elnaz", lName: "mnt", printMsg: function () {
        return this.fName + "" + this.lName + ".";
    }
}

// ex 2- 1

document.write(obj.printMsg());
setTimeout(() => console.log(obj.printMsg()), 10000);
setTimeout(() => console.log(obj.fName), 15000);
setTimeout(() => console.log(obj.lName), 20000);

//ex 2- 2
const msg: { fName: string, lName: string, prtMsg: Function }[] = [{
    fName: "Elnaz", lName: "montazeri", prtMsg: function () {
        return ( "i love you : "+this.fName) ;
    }
}]


for (let i = 0; i <10; i++) {
  msg.forEach(element => { 
      document.write(element.fName+ element.lName+"<br>") });
      //document.write(msg[0]);
}

//Basic ex 3

let myArray:Array<{Name:string}>=[{Name:"name1"},{Name:"name2"},{Name:"name3"},{Name:"name4"}];
document.write("<br>-----------------1. Print only the index of the elements.----------------<br>");
for (let index in myArray ) {
   document.write(index);
 };

document.write("<br>-----------------2. Print only the values. ---------------<br>");

myArray.forEach(x=> { 
    document.write(x.Name+"<br>") });

document.write("<br>-----------------3. Print both index and values ---------------<br>");
myArray.forEach((x , y)=> { 
    document.write("index is:  " +y +"   and   "+ "nane is:"+"  "+x.Name +"<br>") });
