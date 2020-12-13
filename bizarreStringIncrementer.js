// Start your implementation here
function bizarreStringIncrementer(str){
    let arr=[],arrs=[]
    for(let i=0;i<str.length;i++)
    {
      if(Number(str[i])==str[i])
        arr.push(str[i])
      else
        arrs.push(str[i])    
    }

    let added=arr.join('')
    return arrs.join('')+addone(added)  
       
    function addone(added){
       let arr1=[] 
       for(let i=0;i<added.length;i++)
       {
          if(added[i]!=='0')
            arr1.push(added[i]) 
       } 

       let addedone=Number(arr1.join(''))+1
       let str1=''
       if(addedone.toString().length<added.length)
       {
          for(let i=0;i<added.length-addedone.toString().length;i++)
          {
             str1=str1+'0' 
          } 
       }

       return str1+addedone.toString()
    }
    
}
