var index=0;
var win;
var votestoparty=['TRS','CPM','BJP','YSR Congress','Congress','Loksatha','PRP','TDP']
var selectedButt;
var votes=[0,0,0,0,0,0,0,0]
var allButts=Array.from(document.getElementsByClassName('pbuttons'))
allButts.forEach(litem =>{
    litem.lastChild.addEventListener("click",partySelected)
})
Array.from(document.getElementsByClassName('device-buttons')).forEach(buts=>{
    buts.addEventListener('click',optionProcess)
})
function partySelected(){
    if(selectedButt){
        selectedButt.style.visibility="visible"
    }
    selectedButt=this.parentElement
    selectedButt.style.visibility="hidden"
    document.getElementById("display-image").src='sources/'+this.id+'.png'
    document.getElementById('display-image').style.display="block";
    document.getElementById('votesare').style.display="none"
}
function optionProcess(){
    switch(this.id){
        case "power-button":
            {
                if(document.getElementById("power-indicator").style.backgroundColor=="green"){
                    document.getElementById("power-indicator").style.backgroundColor="red"
                    document.getElementById("ballet").style.display="none"
                }
                else{
                    document.getElementById("power-indicator").style.backgroundColor="green"
                    document.getElementById("ballet").style.display="block"
                }
                break;
            }
        case "option1":
        {
            if(selectedButt)
            {switch(selectedButt.lastChild.id){
                case '1':
                {
                    console.log('haa')
                    votes[0]++;
                    break;
                }
                case '2':
                {
                    votes[1]++;
                    break;
                }
                case '3':
                {
                    votes[2]++;
                    break;
                }
                case '4':
                {
                    votes[3]++;
                    break;
                }
                case '5':
                {
                    votes[4]++;
                    break;
                }
                case '6':
                {
                    votes[5]++;
                    break;
                }
                case '7':
                {
                    votes[6]++;
                    break;
                }
                case '8':
                {
                    votes[7]++;
                    break;
                }
            }
            }
            else{alert("Please select a party to elect your representative")}
            break;
        }
        case "option2":
        {
            if(selectedButt)
            {document.getElementById('display-image').style.display="none";
            selectedButt.style.visibility="visible"}
            else{alert("you haven't selected a option yet?")}
            break;
        }
        case "option3":
        {
            var conte='<table style="background-color:aqua;height:500px;width:500px;text-align:center;font-size:1.3rem"><tr><th>Party</th><th>Votes Secured</th></tr><tr><td>Congress</td><td>'+votes[0]+'</td></tr><tr><td>BJP</td><td>'+votes[1]+'</td></tr><tr><td>TDP</td><td>'+votes[2]+'</td></tr><tr><td>YSR Congress</td><td>'+votes[3]+'</td></tr><tr><td>LokSatha</td><td>'+votes[4]+'</td></tr><tr><td>CPM</td><td>'+votes[5]+'</td></tr><tr><td>TRS</td><td>'+votes[6]+'</td></tr><tr><td>PRP</td><td>'+votes[7]+'</td></tr></table>';
            win=window.open('results.html')
            win.document.write(conte)
            break;
        }
        case "option4":
        {
            win.close()
            break;
        }
        case "option5":
        {
            if(index!=0){
                index--;
            }
            document.getElementById('display-image').style.display="none";
            document.getElementById('votesare').style.display="block"
            document.getElementById('votesare').innerHTML=votestoparty[index]+': '+votes[index]
            break;
        }
        case "option6":
        {
            if(index!=7){
                index++;
            }
            document.getElementById('display-image').style.display="none";
            document.getElementById('votesare').style.display="block"
            document.getElementById('votesare').innerHTML=votestoparty[index]+': '+votes[index]
            break;
        }
        case 'reset-button':
        {
            votes=[0,0,0,0,0,0,0,0]
            document.getElementById('votesare').innerHTML=votestoparty[index]+': '+votes[index]
        }
        case "count-button":
        {
            document.getElementById('display-image').style.display="none";
            document.getElementById('votesare').style.display="block"
            document.getElementById('votesare').innerHTML='Total Votes: '+votes.reduce((a,b)=> a+b,0)
        }
    }
}