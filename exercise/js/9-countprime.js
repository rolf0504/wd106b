function countprime(n,m)
{
    if(n>m)
    {
        a=n
        n=m
        m=a
    }
    a=0
    for(i=n;i<=m;i++)
    {
        for(j=2;j<=i;j++)
        {
            if(i%j==0) break
        }
        if(i==j) a++
    }
    return a
}

console.log(countprime(3,7))