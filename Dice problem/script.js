

function playDice() {

    let dice1 = document.getElementById("member-1");
    dice1.style.backgroundColor = "white";
    dice1.innerHTML=null;
    let dice2 = document.getElementById("member-2");
    dice2.style.backgroundColor = "white";
    dice2.innerHTML=null;
    let dice3 = document.getElementById("member-3");
    dice3.style.backgroundColor = "white";
    dice3.innerHTML=null;
    let winner = document.getElementById("winner");
    winner.innerHTML=null;

    let a = +(dices1());
    let b = +(dices2());
    let c = +(dices3());

    let h1 = document.createElement("h1");
    h1.innerText = a;

    let h2 = document.createElement("h1");
    h2.innerText = b;

    let h3 = document.createElement("h1");
    h3.innerText = c;

    dice1.append (h1);
    dice2.append(h2);
    dice3.append(h3);

    green(a,b,c);

    let h4 = document.createElement("h1");
    h4.innerText = green(a,b,c);

    winner.append(h4);

   

}

function green(a,b,c) {



    if((a!==b)&&(a!==c)&&(b!==c)) {
    if(a>b && a>c)  {
        
        document.getElementById("member-1").style.backgroundColor = "green";
   
     if(b>c) {
        document.getElementById("member-2").style.backgroundColor = "yellow";
        document.getElementById("member-3").style.backgroundColor = "red";
    } else if(c>b) {
        document.getElementById("member-3").style.backgroundColor = "yellow";
        document.getElementById("member-2").style.backgroundColor = "red";
    }
    return a;
    
    } else if(a<b && b>c ) {
        document.getElementById("member-2").style.backgroundColor = "green";
        
        if(a>c) {
            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-3").style.backgroundColor = "red";
        } else if(c>a) {
            document.getElementById("member-3").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
        }
        return b;
    } else if(c>a && c>b) {
        document.getElementById("member-3").style.backgroundColor = "green";
        if(a>b) {
            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-2").style.backgroundColor = "red";
        } else if(b>a) {
            document.getElementById("member-2").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
        }
        return c;
    }
} else if(a===b && a!==c) {
    if(a>c) {
        document.getElementById("member-1").style.backgroundColor = "blue";
        document.getElementById("member-2").style.backgroundColor = "blue";
        document.getElementById("member-3").style.backgroundColor = "yellow";
        return a;
    } else if(a<c) {
        document.getElementById("member-1").style.backgroundColor = "blue";
        document.getElementById("member-2").style.backgroundColor = "blue";
        document.getElementById("member-3").style.backgroundColor = "green";
        return c;
    }

} else if(b===c && b!==a) {
    if(a>c) {
        document.getElementById("member-1").style.backgroundColor = "green";
        document.getElementById("member-2").style.backgroundColor = "blue";
        document.getElementById("member-3").style.backgroundColor = "blue";
        return a;
    } else if(a<c) {
        document.getElementById("member-1").style.backgroundColor = "yellow";
        document.getElementById("member-2").style.backgroundColor = "blue";
        document.getElementById("member-3").style.backgroundColor = "blue";
        return c;
    }
} else if(a===c && b!==c) {
    if(a>b) {
        document.getElementById("member-1").style.backgroundColor = "blue";
        document.getElementById("member-2").style.backgroundColor = "yellow";
        document.getElementById("member-3").style.backgroundColor = "blue";
        return a;
    } else if(a<b) {
        document.getElementById("member-1").style.backgroundColor = "blue";
        document.getElementById("member-2").style.backgroundColor = "green";
        document.getElementById("member-3").style.backgroundColor = "blue";
        return b;
    }

}  else if(a==b && a==c) {
    document.getElementById("member-1").style.backgroundColor = "blue";
    document.getElementById("member-2").style.backgroundColor = "blue";
    document.getElementById("member-3").style.backgroundColor = "blue";
    return a;
}

}

function dices1() {
    let a = Math.floor(Math.random() * 6);

    if(a===0) {
        return 1;
    } else {
        return a;
    }
  
}


function dices2() {
    let a = Math.floor(Math.random() * 6);

    if(a===0) {
        return 1;
    } else {
        return a;
    }
  
}

function dices3() {
    let a = Math.floor(Math.random() * 6);

    if(a===0) {
        return 1;
    } else {
        return a;
    }
  
}

