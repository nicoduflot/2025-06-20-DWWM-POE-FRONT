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
    /*
    créer la fonction setDeg avec en paramètre la valeur de corps
    corps 1 - 2 => dg 1
    corps 3 - 4 => dg 2
    corps 5 - 6 => dg 3
    corps 7 => dg 4

    une fois les dégâts récupérés, les mettre à jours dans l'élément avec l'id dgCac
    */
    setProfil(profil);
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

function setDeg(corps){

}

function setKo(esprit){

}

function nbActions(corps){

}

function setProfil(profil){
    fetch('../ressources/profils.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for(profil of data){
            console.log(profil.name);
            
        }
        
    });
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