function prime(n)
{
    for(i=2;i<=n;i++)
    {
        if(n%i==0)
        {
            return 'False'
            break
        }
        else
        {
            return 'true'
            break
        }
    }
    
}

console.log(prime(17))