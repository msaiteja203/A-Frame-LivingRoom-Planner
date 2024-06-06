function CreaTable(e){
    e.preventDefault;
    let row = document.getElementById("rows").value;
    let col = document.getElementById("cols").value;

    console.log(row);
    console.log(col);
    var html="<table border='1'>";
    for(let r=0; r<row; r++){
        html+="<tr>";
        for(let c=0;c<col; c++){
            html+= "<td>hi</td>"
        }
        html+= "</tr>";
    }
    document.getElementById("tblarea").innerHTML = html;
   }