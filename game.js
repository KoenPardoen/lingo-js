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
  tempAnswerArray = answerArray.slice();
  console.log(tempAnswerArray)
  getTypedWord();
  if (typedWord === answer) {
    alert('gewonnen');
    return true;
  }

  for(var i = 0; i < 5; i++){
    console.log(typedWord[i] +" === "+tempAnswerArray[i])
    if (typedWord[i] === tempAnswerArray[i]){
      console.log("true "+typedWord[i] +" === "+tempAnswerArray[i])
      document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor = 'red';
      delete tempAnswerArray[i];
    }
  }

console.log(tempAnswerArray);
for(var i = 0; i < 5; i++){
                for (var j = 0; j < 5; j++) {
                if (i!=j){
                  if (typedWord[i] === tempAnswerArray[j])
                  {
                    document.getElementById('letter'+rowCounter+'_'+ j).style.backgroundColor = 'yellow';
                    delete tempAnswerArray[j];
                  }
                }
              }
            }
            console.log(tempAnswerArray);
  rowCounter++;
}
function getTypedWord(){
  typedWord = ""
 for (var i = 0; i < answer.length; i++) {
   typedWord += document.getElementById('letter'+rowCounter+'_' + i).value;
 }

}
