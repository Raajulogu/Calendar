var contain=document.createElement("div");
contain.setAttribute("class","container")
var row=document.createElement("div");
row.setAttribute("class","row");
var col=document.createElement("div");
col.setAttribute("class","col-md-6");
var input=document.createElement("input");
input.setAttribute("id","main")
input.setAttribute("type","date")
input.innerHTML="mm/dd/yyyy"
var box =document.createElement("div")
var button=document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",dis);

function absolute(value1,value2){
    return Math.floor(value1/value2)
}

function dis(){
    var screen=document.createElement("div");
screen.setAttribute("class","screen");
    var res=document.getElementById("main").value;
    if(Date.parse(res)){
        var line=new Date(res);
        var date=new Date(res);
        var current=new Date();
        var millisecond=current.getTime()-date.getTime();
        var second=absolute(millisecond,1000);
        var min=absolute(second,60)
        var hour=absolute(min,60);
        var day=absolute(hour,24);
        var year=getyear(current,date);
        var month=getmonth(year,current,date);
        console.log(year);
        console.log(month);
        var b=linebreak();
        var br1=linebreak();
        var br2=linebreak();
        var br3=linebreak();
        var br4=linebreak();
        var br5=linebreak();
        var br6=linebreak();
        var br7=linebreak();
        screen.append("Given input date is ",line,b,"Year :  ",year,br1,"Month :  ",month,br2,"Day :  ",day,br3,"Hour :  ",hour,br4,"Minute :  ",min,br5,"Second :  ",second,br6,"Milli second :  ",millisecond,br7);
        }
    else{
        screen.innerHTML="Please Enter a valid Data"
    }
    box.append(screen);
}
function getyear(ele1,ele2){
    var current=new Date(ele1);
    var user=new Date(ele2);
    return current.getFullYear()-user.getFullYear();
}
function getmonth(ele,ele1,ele2){
    var month=(ele*12)+(ele1.getMonth()-ele2.getMonth());
    return month
}
function linebreak(){
    var res=document.createElement('br');
    return res;
}
var br=linebreak();
col.append(input,button,br,box)
row.append(col);

contain.appendChild(row);
document.body.append(contain);