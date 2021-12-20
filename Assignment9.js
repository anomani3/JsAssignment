const arr1 = ["A","B","C"];
const arr2 = [1,2,3];
const mergeAlernatively = (arr1, arr2) => {
   const res = [];
   for(let i = 0; i < arr1.length + arr2.length; i++){
      if(i % 2 === 0){
         res.push(arr1[i/2]);
      }else{
         res.push(arr2[(i-1)/2]);
      };
   };
   return res;
};
console.log(mergeAlernatively(arr1, arr2));