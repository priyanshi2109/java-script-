// write a function getscore that 
// number a students marks (0-100) and return a grade (A-F) based on the following criteria:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F

function getscore(score) {
    if (score>=90 && score<=100){
        return "A";
    }
    else if (score>=80 && score<=89){
        return "B";
    }
    else if ( score>=70 && score<= 79){
        return "C";

    }
    else if (score>=60 && score<= 69){
        return "D";
    }
    else if (score>=0 && score<= 59){
        return "F";
    }
    else {
        return "Invalid score";
    }
}

console.log(getscore(95)); //A