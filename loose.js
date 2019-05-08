const close_button = document.getElementById("leave");
const replay_button = document.getElementById("replay");

function replay(){
  document.location.href="game.html";
}

  function main(){
    replay_button.addEventListener('click', () => replay());
    }
    

    main();