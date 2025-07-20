const LanguageSelect = document.getElementbyID("LanguageSelect");
const title = document.getElementbyID("Title");
const StudioDescription = document.getElementbyID("StudioDescription");
const NavOurGames = document.getElementbyID("NavOurGames");
const Discord = document.getElementbyID("Discord");
const English = LanguageSelect.value==="English";
const Spanish = LanguageSelect.value==="Español";
const French = LanguageSelect.Value==="Français";

function Change() {
  if (English) {
    title.InnerHTML="Nexus Develepor Team";
    StudioDescription.InnerHTML="Nexus Sanctum developer team is a group of people who make games just for you (yes you). This team has a lot of things for you. Check Theese Out!";
    NavOurGames.InnerHTML="Our Games";
    Discord.InnerHTML="Join Our Discord!";
  }

if (Spanish) {
    title.InnerHTML="Equipo de desarrollo de Nexus";
    StudioDescription.InnerHTML="El equipo de desarrolladores de Nexus Sanctum es un grupo de personas que crean juegos solo para ti (sí, para ti). Este equipo tiene mucho que ofrecerte. ¡Échales un vistazo!";
    NavOurGames.InnerHTML="Nuestros juegos";
    Discord.InnerHTML="¡Únete a nuestro discord!";
}

if (French) {
    title.InnerHTML="Équipe de développement Nexus";
    StudioDescription.InnerHTML="L'équipe de développement de Nexus Sanctum est un groupe de personnes qui créent des jeux spécialement pour vous (oui, vous). Cette équipe a plein de choses à vous offrir. Découvrez-les !";
    NavOurGames.InnerHTML="Nos jeux";
    Discord.InnerHTML="Rejoignez notre Discord";
}
}
