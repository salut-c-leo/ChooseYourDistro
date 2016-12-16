var arch = 0;
    deb = 0;
    chromium = 0;
    fedora = 0;
    handy = 0;
    puppy = 0;
    gentoo = 0;
    sabayon = 0;
    ubuntu = 0;

var distros = []; // Un tableau qui permettra de sortir la meilleure distribution

// Opérations sur les variables, afin de déterminer la distribution à utiliser
document.getElementById('btn-infosis').onclick = function() { // Si l'utilisateur se sent à l'aise avec l'informatique, on incrémente ces variables
  arch = ++arch;
  deb = ++deb;
  fedora = ++fedora;
  gentoo = ++gentoo;
  sabayon = ++sabayon;
};
document.getElementById('btn-infosid').onclick = function() { // Au contraire, si l'informatique est une horreur, on incrémente ces variables
  chromium = ++chromium;
  handy = ++handy;
  puppy = ++puppy;
  ubuntu = ++ubuntu;
};
document.getElementById('btn-ootbs').onclick = function() { // Si l'utilisateur veut pas se prendre la tête, on incrémente ces variables
  deb = ++deb;
  fedora = ++fedora;
  sabayon = ++sabayon;
  ubuntu = ++ubuntu;
  handy = ++handy;
  chromium = ++chromium;
  puppy = ++puppy;
};
document.getElementById('btn-ootbd').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;
};
document.getElementById('btn-olds').onclick = function() {
  fedora = ++fedora;
  sabayon = ++sabayon;
  ubuntu = ++ubuntu;
  arch = ++arch;
  gentoo = ++gentoo;
  deb = ++deb;
  handy = ++handy;
  chromium = ++chromium;
};
document.getElementById('btn-oldd').onclick = function() {
  chromium = ++chromium;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  arch = ++arch;
  gentoo = ++gentoo;
};
document.getElementById('btn-rollings').onclick = function() {
  chromium = ++chromium;
  arch = ++arch;
  gentoo = ++gentoo;
  sabayon = ++sabayon;
};
document.getElementById('btn-rollingd').onclick = function() {
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  ubuntu = ++ubuntu;
  fedora = ++fedora;
};
document.getElementById('btn-inssis').onclick = function() {
  ubuntu = ++ubuntu;
  chromium = ++chromium;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  sabayon = ++sabayon;
  fedora = ++fedora;

  showResult();
};

document.getElementById('btn-inssid').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;

  showResult();
};

function showResult() { // Merci à @Sp3r4z pour cette fonction super utile !

  // Pour masquer les conseils de chiffrement selon distrib
  $("#archdisk").hide();
  $("#gendisk").hide();

  // Classement des distributions
  distros.push(
    {distro: 'Arch Linux',score: arch},
    {distro: 'Gentoo',score: gentoo},
    {distro: 'Sabayon',score: sabayon},
    {distro: 'Fedora',score: fedora},
    {distro: 'Debian GNU/Linux',score: deb},
    {distro: 'HandyLinux',score: handy},
    {distro: 'Ubuntu',score: ubuntu},
    {distro: 'Puppy Linux',score: puppy},
    {distro: 'Chromium OS',score: chromium}
  );

  distros.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(distros.distro);
  console.log(distros[0].distro);
  $('#results').text(distros[0].distro);
  $('#moui').text(distros[1].distro);
  $('#mwa').text(distros[0].distro);

  switch(distros[0].distro) {
    case 'Arch Linux': $("#lien").attr("href", "https://archlinux.org"); $("#archdisk").show(); break;
    case 'Debian GNU/Linux': $("#lien").attr("href", "https://debian.org"); $("#gendisk").show(); break;
    case 'Chromium OS': $("#lien").attr("href", "https://arnoldthebat.co.uk/wordpress/chromium-os/"); break;
    case 'Fedora': $("#lien").attr("href", "https://getfedora.org"); $("#gendisk").show(); break;
    case 'HandyLinux': $("#lien").attr("href", "https://handylinux.org/"); break;
    case 'Puppy Linux':  $("#lien").attr("href", "http://puppylinux.com/"); break;
    case 'Gentoo': $("#lien").attr("href", "https://gentoo.org"); break;
    case 'Sabayon': $("#lien").attr("href", "https://www.sabayon.org/"); $("#gendisk").show(); break;
    case 'Ubuntu': $("#lien").attr("href", "https://ubuntu.com"); $("#gendisk").show(); break;
  };

  $("#resultat").text(distros[0].distro);

};

document.getElementById('btn-restart').onclick = function() {
  arch = 0;
  deb = 0;
  chromium = 0;
  fedora = 0;
  handy = 0;
  puppy = 0;
  gentoo = 0;
  sabayon = 0;
  ubuntu = 0;
  distros = [];
};
