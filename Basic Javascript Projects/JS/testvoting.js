function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Vote").value;
    Can_vote = (Age < 18) ? "You are unable to vote":"You are able to Vote";
    document.getElementById("Voting").innerHTML = Can_vote + " to vote.";
}