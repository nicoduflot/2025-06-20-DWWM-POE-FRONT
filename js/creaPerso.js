/* les fonctions de modification des données */

function initPersonnage(){
    const ethnie = document.getElementById('ethnie');
    const profil = document.getElementById('profil');
    const corps = this.document.getElementById('corps').value;
    const esprit = this.document.getElementById('esprit').value;
    const mouvement = setMouvement(corps);
    document.getElementById('mouvement').innerText = `${mouvement} pas`;
    const pv = corps*3;
    document.getElementById('pvChart').innerText = pv;
    const mana = esprit*3;
    document.getElementById('manaChart').innerText = mana;
}

function setMouvement(corps){
    let mouvement = 0;
    switch(true){
        case (corps > 0 && corps < 3):
            mouvement = 3;
            break;
        case (corps > 2 && corps < 5):
            mouvement = 3;
            break;
        case (corps > 4 && corps < 7):
            mouvement = 4;
            break;
        case (corps > 6):
            mouvement = 5;
            break;        
    }
    return mouvement;
}

window.addEventListener('DOMContentLoaded', function(){
    initPersonnage();
    /*
    Pour pouvoir interagir avec les éléments HTML de la page, il faut attendre l'événement DOMContentLoaded du navigateur (window).
    Comme cela, JS connaît tout l'arbre DOM de la page et on sera capable de surveiller des événement de la page (document)
    */

    const corps = this.document.getElementById('corps');
    const esprit = this.document.getElementById('esprit');

    corps.addEventListener('change', function(){
        esprit.value = 8 - this.value;
        initPersonnage();
    });
    esprit.addEventListener('change', function(){
        corps.value = 8 - this.value;
        initPersonnage();
    });


});