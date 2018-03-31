function filter(n,m)
{
    a=[]
    if(m<n)
    {
        b=m
        m=n
        n=b
    }
    for(i=n;i<=m;i++)
    {
        if(i%3!=0 && i%5!=0 && i%7!=0) a.push(i)
    }
    return a
}

num=filter(5,15)
console.log(num)