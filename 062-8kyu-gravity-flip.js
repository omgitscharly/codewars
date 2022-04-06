const flip=(d, a)=>{
    return d === "R" ? a.sort((n1,n2) => n1 - n2) : a.sort((n1,n2) => n2 - n1);
}