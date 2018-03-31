function factorial(n)
{
    let result=1
    for(i=1;i<=n;i++) result=result*i;
    return result
}
ans=factorial(10)
console.log(ans)