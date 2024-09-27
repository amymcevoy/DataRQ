//array
const ages = [25,31,42,77]

//map function
let d = ages.map((item)=>
{
    //if item is less than 70 it is multiplied by 2
   if(item < 70)
   {
        return item *2;
   }
   //if it is above 70 its returned as  normal
   else
   {
        return item;
   }
});

//print
console.log(d);
