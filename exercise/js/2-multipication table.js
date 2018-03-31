function multiply(n,m)
{
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)  console.log('%d * %d = %d \t',i,j,i*j)
    }
}

console.log(multiply(9,9))