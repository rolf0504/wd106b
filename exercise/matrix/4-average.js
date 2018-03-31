function average(a)
{
    n=0
    for(i=0;i<a.length;i++) n=n+a[i];
    ans=n/a.length
    return ans
}

num=average([1,2,3,4,5])
console.log(num)