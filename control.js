isMenuOpen = false;

isExpertigeOpen = false;

isProjetsOpen = false;

function openOrCloseMenu() {
    if(isMenuOpen) {
        isMenuOpen = false;
        document.getElementById("menu-section").style = "display: none;"
    } else {
        isMenuOpen = true;
        document.getElementById("menu-section").style = "display: block;"
    }
}

function openExpertige() {
    if(isExpertigeOpen){
        isExpertigeOpen = false;
        document.getElementById("menu-expertige").classList = "triangle";
        document.getElementById("expertige-items").style = "display: block;";
        document.getElementById("expertige").style = "background-color: black;";
    } else {
        isExpertigeOpen = true;
        document.getElementById("menu-expertige").classList = "triangle-plier";
        document.getElementById("expertige-items").style = "display: none;";
        document.getElementById("expertige").style = "background-color: none;";
    }
}

function openProjects() {
    if(isProjetsOpen){
        isProjetsOpen = false;
        document.getElementById("menu-projets").classList = "triangle";
        document.getElementById("projects-item").style = "display: block;";
        document.getElementById("projects").style = "background-color: black;";
    } else {
        isProjetsOpen = true;
        document.getElementById("menu-projets").classList = "triangle-plier";
        document.getElementById("projects-item").style = "display: none;";
        document.getElementById("projects").style = "background-color: none;";
    }
}
