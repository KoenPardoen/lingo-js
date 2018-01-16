var answer = words[Math.floor(Math.random()*words.length)];
var answerArray = answer.split('');
var typedWord = "";
var rowCounter = 0;
var random = ["koekkoek"];


console.log(answer);
document.getElementById('letter0_0').value = answer[0];
var checkBtn = document.getElementById('check');

checkBtn.setAttribute("onclick", "check();");

function check(){
  getTypedWord();
  if (typedWord === answer) {
    alert('gewonnen');
  }

  for(var i = 0; i < answer.length; i++){
    if (typedWord[i] === answer[i]) {
      document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor = 'red';
    }
        else {

                for (var j = 0; j < answer.length; j++) {
                if (i!=j){
                  if (typedWord[j] === answer[i])
                  {
                    document.getElementById('letter'+rowCounter+'_'+ j).style.backgroundColor = 'yellow';
                  }
                }
              }
            }
      }
  rowCounter++;
}
function getTypedWord(){
  typedWord = ""
 for (var i = 0; i < answer.length; i++) {
   typedWord += document.getElementById('letter'+rowCounter+'_' + i).value;
 }

}
