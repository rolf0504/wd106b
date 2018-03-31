function insert(a,n)
{
    a.push(n)
    a.sort()
    return a
}

isr=insert([1,2,5,6,7], 3)
console.log(isr)