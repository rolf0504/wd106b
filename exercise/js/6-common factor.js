function commFactor(n,m)
{
    if(n>m)
    {
        a=n
        n=m
        m=a
    }
    for(i=2;i<=n;i++)
    {
        if(m%i==0 && n%i==0) return i
    }
    return 'none'
}

cmf=commFactor(12,15)
console.log(cmf)