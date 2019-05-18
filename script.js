"use strict";

(function(){
    var buttons = document.querySelectorAll("button");
    var display = document.querySelector("input");
    var value1 = "";
    var value2 = "";
    var opp = "";
    var point = false;

   /* function exp(a,b){                //  This function represents what Math.pow does to our data.
        var res=1;
        for(i=1;i<=b;i++){
            res= res*a;
        }
        return res;
    }*/

    
    function opps(a,b){
        if(opp == "+"){
            return parseFloat(a) + parseFloat(b);}
            else if(opp == "-"){
                return parseFloat(a) - parseFloat(b);}
                else if(opp == "x"){
                    return parseFloat(a) * parseFloat(b);}
                    else if(opp == "/"){
                        return parseFloat(a) / parseFloat(b);}
                        else if(opp == "%"){
                            return (parseFloat(a)/100) * parseFloat(b);}
                            else if(opp == "e"){
                                return Math.pow(parseFloat(a),parseFloat(b));
                            /*  return exp(parseFloat(a),parseFloat(b));    //  This is another posible solution for our program.  */
                        }
    }
    
    function obDat(event){         
        if(event.target.id >= "0" && event.target.id <= "9"){
            display.value = display.value + event.target.id;
        }   
        if(event.target.id == "+" || event.target.id == "-" || 
           event.target.id == "x" || event.target.id == "/" || 
           event.target.id == "%" || event.target.id == "e"){
             point = false;
             value1 = display.value;
             display.value = "";  
             opp = event.target.id;
        }
        if(event.target.id == "="){
            if(value1 != "" && display.value != ""){
            value2 = display.value;
            display.value = opps(value1,value2);
            }
        }
        if(event.target.id == "." && point == false){
            display.value = display.value + ".";
            point = true;            
        }
        if(event.target.id == "ac"){
            display.value = "";
            value1 = "";
            value2 = "";
            point = "";
            opp = "";
        }
        if(event.target.id == "s"){
            display.value = (parseFloat(display.value)* (-1) );
        }
        
    }

    for(var i=0; i< buttons.length; i++){
        buttons[i].addEventListener("click",obDat);

    }
})();



