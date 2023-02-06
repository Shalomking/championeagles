function function() {
    console.log('Hello World:');

}
function();

function PassExam(name, score) {

    var passUni = 73;

    var passColl = 51;

    if(score >= passUni) {

        console.log(name + 'has enrolled in University with' + score + 'points');

    } else if(score >= passColl) [

        console.log(name + 'has enrolled in college with' + score + 'points')

    ] else {

        console.log(name + 'has failed');
    }

}

function calcscore(quizScore, assayScore) {

    var score = quizscore + assayScore;

    return score;
}
passExam('John', calcscore(40, 30));
passExam('Mary', 65);
passExam('Bob', 45);