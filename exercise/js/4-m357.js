function m357(n,m)
{
    if(m<n)
    {
        a=m
        m=n
        n=a
    }
    for(i=n;i<=m;i++)
    {
        for(j=3;j<=7;j+=2)
        {
            if(i%j==0) console.log(i)
        }
    }
}

console.log(m357(10,15))