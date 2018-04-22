var input;
var button;
var lexicon;
function setup(){
    noCanvas();
    input=createInput("it was a dark and stormy night.");
    button=createButton('submit');
    lexicon= new RiLexicon();
    button.mousePressed(processRita);
    input.changed(processRita);
    input.size(300);
}

function processRita(){
    var s=input.value();
    var rs=new RiString(s);
    var words=rs.words();
    var pos=rs.pos();
    var output='';
    for(let i=0;i<words.length;i++){
        if(/nn.*/.test(pos[i])){
            let w=lexicon.randomWord(pos[i]);
            console.log(w);
            output+=w;
        }else{
            output+=words[i];
        }
        output+=" ";
    }
    createP(output);

}