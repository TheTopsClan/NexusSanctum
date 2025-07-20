function Change() {
  const LanguageSelect = document.getElementById("LanguageSelect");
  const selectedLang = LanguageSelect.value;

  const title = document.getElementById("Title");
  const StudioDescription = document.getElementById("StudioDescription");
  const NavOurGames = document.getElementById("NavOurGames");
  const Discord = document.getElementById("Discord");

  if (selectedLang === "English") {
    title.innerHTML = "Nexus Developer Team";
    StudioDescription.innerHTML = "Nexus Sanctum developer team is a group of people who make games just for you (yes you). This team has a lot of things for you. Check These Out!";
    NavOurGames.innerHTML = "Our Games";
    Discord.innerHTML = "Join Our Discord!";
  } else if (selectedLang === "Español") {
    title.innerHTML = "Equipo de desarrollo de Nexus";
    StudioDescription.innerHTML = "El equipo de desarrolladores de Nexus Sanctum es un grupo de personas que crean juegos solo para ti (sí, para ti). Este equipo tiene mucho que ofrecerte. ¡Échales un vistazo!";
    NavOurGames.innerHTML = "Nuestros juegos";
    Discord.innerHTML = "¡Únete a nuestro discord!";
  } else if (selectedLang === "Français") {
    title.innerHTML = "Équipe de développement Nexus";
    StudioDescription.innerHTML = "L'équipe de développement de Nexus Sanctum est un groupe de personnes qui créent des jeux spécialement pour vous (oui, vous). Cette équipe a plein de choses à vous offrir. Découvrez-les !";
    NavOurGames.innerHTML = "Nos jeux";
    Discord.innerHTML = "Rejoignez notre Discord";
  }
}
