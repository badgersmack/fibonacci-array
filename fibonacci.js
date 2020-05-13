function fibonacciGenerator (n) {
    //TODO
    var fibArray = [];

    for(var i = 0; i < n; i++){
        // Every number before reaches 2 is added to the array (0 and 1)
        if (i < 2){
            fibArray.push(i);
        }
        //Every number after the first 2 is a sum of 2 proceeding numbers
        else{
            fibArray.push(fibArray[i - 1]+ fibArray[i - 2]);
        }
    }
    //Return an array of fibonacci numbers.
    return fibArray;
}
