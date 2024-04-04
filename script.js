function WinrateCalculator() {
    let matches = document.getElementById("matches").value;
    let winrate = document.getElementById("winrate").value;
    let goal = document.getElementById("goal").value;
    
   // let need = (matches * goal - winrate * 100) / (100 - goal);

    let need = (matches*(goal/winrate)) - matches;
    



    document.getElementById("Answer").innerHTML = "Win Needs: " + need.toFixed(0);
      return false; 
}
