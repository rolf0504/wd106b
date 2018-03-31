function find(a,n)
{
    for(i=0;i<a.length;i++)
    {
        if(a[i]==n) return i
       
    }
    return -1
}

idx=find([1,4,5,8,9],5)
console.log(idx)