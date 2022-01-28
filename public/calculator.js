let wSum = 0;
let sumWeights = 0;

const addActivity = document.getElementById('addbutton');
const removeActivity = document.getElementById('removebutton');
const weightedButton = document.getElementById('weightedbutton');
const meanButton = document.getElementById('meanbutton');
const resetButton = document.getElementById('resetbutton');

weightedButton.onclick = function calcWeight(){
    var weightIndex = document.getElementsByTagName("table")[0].rows.length;
    var wdecimal = [];
    var wdWeighted = [];
    var addWeights = [];
    var listWeights = [];
    
    for(var i=0; i<weightIndex-1; i++){
        var wmark = parseFloat(document.querySelectorAll('.mark')[i].value);
        var wtotal = parseFloat(document.querySelectorAll('.total')[i].value);
        wdecimal.push(wmark/wtotal);
    }

    for(var j=0; j<weightIndex-1; j++){
        listWeights.push(parseInt(document.querySelectorAll('.weight')[j].value));
    }

    for(var l=0; l<weightIndex-1; l++){
        wdWeighted.push(wdecimal[l]*listWeights[l]);
        addWeights.push(listWeights[l]);
    }

    for(var k=0; k<weightIndex-1; k++){
        wSum+=wdWeighted[k];
        sumWeights+=addWeights[k];
    }
    var wResults = wSum/sumWeights*100;
    if(isNaN(wResults)){
        document.getElementById('result').innerHTML = "Missing Values";
    } else {
        document.getElementById('result').innerHTML = wResults.toFixed(2);
    }
}

meanButton.onclick = function calcMean(){
    var meanIndex = document.getElementsByTagName("table")[0].rows.length;
    var mDecimal = [];
    let mSum = 0;
    for(var i=0; i<meanIndex-1; i++){
        var mmark = parseInt(document.querySelectorAll('.mark')[i].value);
        var mtotal = parseInt(document.querySelectorAll('.total')[i].value);
        mDecimal.push(mmark/mtotal);
    }

    for(var j=0; j<meanIndex-1; j++){
        mSum += mDecimal[j];
    }
    var mResult = mSum/(meanIndex-1)*100;
    if(isNaN(mResult)){
        document.getElementById('result').innerHTML = "Missing Values";
    } else {
    document.getElementById('result').innerHTML = mResult.toFixed(2);
    }
}

addActivity.onclick = function addRow(){
    var row = document.getElementById("row");
    var table = document.getElementById("myTable");
    var clone = row.cloneNode(true);
    clone.id="newID";
    table.appendChild(clone);
    var cloning = clone.querySelectorAll('.activity,.smallActi,.weight,.mark,.total,.result');
    for(var i=0; i<5; i++){
        cloning[i].value = '';
    }
    cloning[5].innerHTML = '';
}

removeActivity.onclick = function removeRow(){
    var table = document.getElementById("myTable");
    if(table.rows.length <=2){
        return;
    }
    table.deleteRow(-1);
}

window.onkeyup = function calcPercent(){
    var percentIndex = document.getElementsByTagName("table")[0].rows.length;
    var percentValues = [];
    for(var i=0; i<percentIndex-1; i++){
        var pmark = parseInt(document.querySelectorAll('.mark')[i].value);
        var ptotal = parseInt(document.querySelectorAll('.total')[i].value);
        var presult = pmark/ptotal*100;
        percentValues.push(presult);
        if(isNaN(percentValues[i])){
            document.querySelectorAll('.result')[i].innerHTML = 0;
        } else {document.querySelectorAll('.result')[i].innerHTML = percentValues[i].toFixed(2);}
    }
}