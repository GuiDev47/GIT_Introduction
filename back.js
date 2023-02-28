let prixEntrées =[10,12,13];
let prixPlats = [11,12,13];
let prixDesserts = [9,15,7];

function calculerPrix(){
    var prix1  = prixEntrées[document.getElementsByClassName("select")[0].selectedIndex];
    document.getElementById("prixEntrée").innerHTML = prix1 + " €";

    var prix2  = prixPlats[document.getElementsByClassName("select")[1].selectedIndex];
    document.getElementById("prixPlat").innerHTML = prix2 + " €";
    
    var prix3  = prixDesserts[document.getElementsByClassName("select")[2].selectedIndex];
    document.getElementById("prixDessert").innerHTML = prix3 + " €";

    var prixTotal = prix1 + prix2 + prix3;
    document.getElementById("Total").innerHTML = prixTotal + " €";

}