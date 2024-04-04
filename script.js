function WinrateCalculator() {
    let matches = document.getElementById("matches").value;
    let winrate = document.getElementById("winrate").value;
    let goal = document.getElementById("goal").value;
    
    let need = (matches * goal - winrate * 100) / (100 - goal);





    document.getElementById("Answer").innerHTML = "Win Needs: " + need;
      return false; 
}
