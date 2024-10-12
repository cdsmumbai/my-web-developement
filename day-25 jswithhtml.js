// strings
var data='hey everyone  hope  you  all are  doing  gud';
console.log("data:", data);

console.log("lowere case:", data.toLowerCase());
console.log("upper case:", data.toUpperCase());

console.log("slice:", data.slice(2,6));
data=data.slice(2,6)
console.log("slice:", data);
//length
console.log(data);
console.log("length :", data.length);
//replace
console.log("replace:", data.replace("hey","he"));
console.log("length :", data.length);
data=data.replace("hey", "hi")
console.log("replace:", data);
console.log("length:", dta.length);
updateddata=data.replace("hey", "hi");
console.log("replace:", updateddta);
console.log("originaldata :", data);
//include
console.log(data.includes("you1"));
console.log("includes:", data.includes("you1"));
var var1="2345";
console.log(var1);
console.log(parseInt(var1));

var var2=7890;
console.log(var2);
console.log(var2.toString());
var varInvalidNum="afe2345"
console.log(parseInt(varInvalidNum));

var demo="good morning";
console.log(demo);
console.log(demo.split(" "));

//objects
var obj1={
    name:"rohan",
    age:25} ;

console.log(obj1);
obj1.newkey="designation";
obj1.value="SE"
console.log(obj1);
obj1.name="rK";
obj1.age=26;
console.log(obj1);
var num=10;
console.log(num);
console.log(++num);
console.log(num);
console.log(--num);
console.log(num);
//comparion
var num1=2;
var num2=3;
console.log(num1 !=num2);

var aga=19;
if(age>18){
    console.log("Eligible to  Vote");
    }else {
    console.log("Not eligible to vote");        
    }

    var obj1={
        name:"TVS",
        bikename:function()
        {console.log("lo  this  is  bike  name");

        }
    };
    console.log(obj1.name);
    obj1.bikename();

    var sum=function(a,b){
        console.log(a+b);
    };
    sum(5+5);

    var demo =function(){
      console.log("demo here")
    }
   demo();
   //arrow function
   //var  aADD={a,b} =>{
   // console.log(a+b);
  // }

   var array=[1,2,3,4,5];
   console.log("current array =>", array);
   //map
   var newarray= array.map((data) => data+2);
 // call back  function
 var newArray = array.map((item)=> item*2);
 console.log("new array => with  map =>", newarray);

 //2.filter
 //const newArray2=array.filter((data)=>{
   // if(data<=3)
    //    return data;

// } );
//console.log("filter:", newArray)


//const newArray2=array.filter((data)=> data<=3)
//const newArray2=array.filter((data)=> {
  //  if(data<=3) 
        return data;
//});
//console.log("filter =>", newArray2 )
  //      return data;

// } );
//console.log("filter:", newArray)
//find
//var newArray3=array.find(data)=> data<2);
//console.log("find=>:", newArray3 )

// reduce
var  totalsum=array.reduce((accumulation, currentvalue)=>{
    return accumulation +currentvalue;
})
console.log(totalsum);

var FlipkartCart=[{
    price:200,
    quantity : 2
},
{ price : 400,
    quantity : 1},
    { price : 100,
        quantity : 4},
        { price : 1200,
            quantity : 2},
            { price : 500,
                quantity :2 
            }
        ];
 var totalcost =FlipkartCart.reduce((accumulator, currentvalue)=>{
    return accumulator +currentvalue.price* currentvalue.quantity;
 })     
    
 var myPromise =new Promise((resolve, reject)=>{
    resolve("success");
    reject("Error occured");
 });

 myPromise
 .then((data)=>{console.log(data)})
 .catch((err)=>{console.log(err)}); 

 //var myPromise =new Promise(function(resolve, reject){
   // setTimeout(function(){
     //  resolve("success");
   //}, 9000);
   //setTimeout(function() {
     // reject("Error occured");
 //},7000},);

 //myPromise
 //.then((data)=>{console.log(data)})
 //.catch((error)=>{console.log(error)}); 
 //console.log("This  is  at  the  last ")







