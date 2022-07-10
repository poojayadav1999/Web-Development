//reduce method
const Arr = [10,20,30,40,50]
const x = Arr.map((element) => element*2) .filter(element => element>40).reduce((accumulator,element,index,array) => accumulator += element);
console.log(x);