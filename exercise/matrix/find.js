function find(array,item)
{
    for(i=0;i<array.length;i++)
    {
        if(array[i]===item) return i
       
    }
    return -1
}

let idx=find([1,4,5,8,9],6)
console.log(idx)