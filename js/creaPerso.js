/* les fonctions de modification des données */

function initPersonnage() {
    const ethnie = document.getElementById('ethnie').value;
    const profil = document.getElementById('profil').value;
    const corps = this.document.getElementById('corps').value;
    const esprit = this.document.getElementById('esprit').value;
    document.getElementById('mouvement').innerText = `${setMouvement(corps)} pas`;
    document.getElementById('pvChart').innerText = corps * 3;
    document.getElementById('manaChart').innerText = esprit * 3;
    document.getElementById('dgCac').innerText = setDeg(corps);
    document.getElementById('ko').innerText = setKo(esprit);
    document.getElementById('actions').innerText = nbActions(esprit);
    document.getElementById('dgDist').innerText = setDeg(esprit);
    setProfil(profil);
    setEthnie(ethnie, esprit * 3);
    //document.getElementById('ethnieChart').innerHTML = tabProfil[0];
    //document.getElementById('sacPerso').innerHTML = setSac(profil.sac);
    //document.getElementById('listeSorts').innerHTML = setSorts(profil.sortAutomatique);
    //document.getElementById('armesChart').innerHTML = setArmes(profil.arme);
}

function setMouvement(corps) {
    let mouvement = 0;
    switch (true) {
        case (corps > 0 && corps < 3):
            mouvement = 3;
            break;
        case (corps > 2 && corps < 5):
            mouvement = 4;
            break;
        case (corps > 4 && corps < 7):
            mouvement = 5;
            break;
        case (corps > 6):
            mouvement = 6;
            break;
    }
    return mouvement;
}

function setDeg(valCarac) {
    let degats = 0;
    switch (true) {
        case (valCarac > 0 && valCarac < 3):
            degats = 1;
            break;
        case (valCarac > 2 && valCarac < 5):
            degats = 2;
            break;
        case (valCarac > 4 && valCarac < 7):
            degats = 3;
            break;
        case (corps > 6):
            degats = 4;
            break;
    }
    return degats;
}

function setKo(esprit) {
    let ko = 0;
    switch (true) {
        case (esprit > 0 && esprit < 4):
            ko = 4;
            break;
        case (esprit > 3 && esprit < 7):
            ko = 3;
            break;
        case (esprit > 7):
            ko = 2;
            break;
    }
    return ko;
}

function nbActions(esprit) {
    let actions = 0;
    switch (true) {
        case (esprit >= 1 && esprit <= 3):
            actions = 2;
            break;
        case (esprit >= 4 && esprit <= 7):
            actions = 3;
            break;
    }
    return actions;
}

function setSac(sac) {
    let sacPerso = '';
    for (element of sac) {
        sacPerso = sacPerso + `${element}<br />`;
    }
    return sacPerso;
}

function setSorts(sorts) {
    let sortsPerso = '';
    for (sort of sorts) {
        sortsPerso = sortsPerso + `<b>${sort.nomSort}</b> ${sort.coutSort}</b><br />`;
        sortsPerso = sortsPerso + `<i>${sort.descriptionSort}</i><br />`;
    }
    return sortsPerso;
}

function setArmes(armes) {
    let armesPerso = '<hr />';
    for (arme of armes) {
        armesPerso = armesPerso + `<b>${arme.nomArme}</b> ${arme.degatArme} dégâts</b><hr />`;
    }
    return armesPerso;
}

function setProfil(profilChar) {
    fetch('../ressources/profils.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (profil of data) {
                if (profil.name === profilChar) {
                    document.getElementById('ethnieChart').innerHTML = profil.description;
                    document.getElementById('sacPerso').innerHTML = setSac(profil.sac);
                    document.getElementById('listeSorts').innerHTML = setSorts(profil.sortAutomatique);
                    document.getElementById('armesChart').innerHTML = setArmes(profil.arme);
                }
            }
            
        });
}

function setEthnie(ethnieChar, mana) {
    fetch('../ressources/ethnies.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (ethnie of data) {
                if (ethnie.name === ethnieChar) {
                    const bonusMana = ethnie.bonusMana + mana;
                    const bonusAutre = ethnie.bonusAutre;
                    document.getElementById('manaChart').innerText = bonusMana;
                    document.getElementById('ethnieChart').innerHTML = `${document.getElementById('ethnieChart').innerHTML} <hr /> ${bonusAutre}`;
                    break;
                }
            }
        });
}



window.addEventListener('DOMContentLoaded', function () {
    initPersonnage();
    /*
    Pour pouvoir interagir avec les éléments HTML de la page, il faut attendre l'événement DOMContentLoaded du navigateur (window).
    Comme cela, JS connaît tout l'arbre DOM de la page et on sera capable de surveiller des événement de la page (document)
    */

    const corps = this.document.getElementById('corps');
    const esprit = this.document.getElementById('esprit');
    const ethnie = this.document.getElementById('ethnie');
    const profil = this.document.getElementById('profil');

    corps.addEventListener('change', function () {
        esprit.value = 8 - this.value;
        initPersonnage();
    });
    esprit.addEventListener('change', function () {
        corps.value = 8 - this.value;
        initPersonnage();
    });
    ethnie.addEventListener('change', function () {
        initPersonnage();
    });
    profil.addEventListener('change', function () {
        initPersonnage();
    });


});