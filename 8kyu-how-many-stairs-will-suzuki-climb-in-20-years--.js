//array, stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday], every day is an array

//sould return a number with formula => 20 year estimate = one year total * 20


function stairsIn20(s){
    //set a variable for sum of numbers
    let sum = 0;
    //loop thorugh stairs array
    for(let i = 0; i < s.length; i++){
        //sum the stairs in days and add it to sum
       sum += s[i].reduce((a,c) => a + c);
    }
    //return sum times 20
    return sum * 20;

}