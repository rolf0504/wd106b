function add(n,m)
{
    let a=[]
    for(i=0;i<n.length;i++)
    {
        a[i]=[]
        for(j=0;j<n[i].length;j++) a[i][j]=n[i][j]+m[i][j]
    }
    return a
}

console.log(add([[1,2],[3,4]],[[1,1],[1,1]]))