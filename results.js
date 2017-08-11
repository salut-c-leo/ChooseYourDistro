var arch = 0;
    deb = 0;
    fedora = 0;
    handy = 0;
    puppy = 0;
    gentoo = 0;
    lfs = 0;
    ubuntu = 0;
    windows = 0;
    macos = 0;

var distros = []; // Un tableau qui permettra de sortir la meilleure distribution

// Opérations sur les variables, afin de déterminer la distribution à utiliser
document.getElementById('btn-infosis').onclick = function() { // Si l'utilisateur se sent à l'aise avec l'informatique, on incrémente ces variables
  arch = ++arch;
  deb = ++deb;
  fedora = ++fedora;
  gentoo = ++gentoo;
  lfs = ++lfs;
};
document.getElementById('btn-infomid').onclick = function() {
  ubuntu = ++ubuntu;
  fedora = ++fedora;
  deb = ++deb;
  puppy = ++puppy;
}
document.getElementById('btn-infosid').onclick = function() { // Au contraire, si l'informatique est une horreur, on incrémente ces variables
  handy = ++handy;
  puppy = ++puppy;
  ubuntu = ++ubuntu;
  fedora = ++fedora;
};
document.getElementById('btn-ootbs').onclick = function() { // Si l'utilisateur veut pas se prendre la tête, on incrémente ces variables
  deb = ++deb;
  fedora = ++fedora;
  ubuntu = ++ubuntu;
  handy = ++handy;
  puppy = ++puppy;
};
document.getElementById('btn-ootbd').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
};
document.getElementById('btn-windows').onclick = function() {
    windows = ++windows;
    macos = 0;
};
document.getElementById('btn-macos').onclick = function() {
    macos = ++macos;
    windows = 0;
};
document.getElementById('btn-olds').onclick = function() {
  fedora = ++fedora;
  ubuntu = ++ubuntu;
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
  deb = ++deb;
  handy = ++handy;
};
document.getElementById('btn-oldd').onclick = function() {
  arch = ++arch;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
};
document.getElementById('btn-volds').onclick = function() {
  deb = ++deb;
  puppy = ++puppy;
};
document.getElementById('btn-voldd').onclick = function() {
  handy = handy;
  puppy = puppy;
  deb = deb;
  arch = arch;
  gentoo = ++gentoo;
};
document.getElementById('btn-rollings').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
};
document.getElementById('btn-rollingd').onclick = function() {
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  ubuntu = ++ubuntu;
  fedora = ++fedora;
  lfs = ++lfs;
};
document.getElementById('btn-inssis').onclick = function() {
  ubuntu = ++ubuntu;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  fedora = ++fedora;

  showResult();
};

document.getElementById('btn-inssid').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;

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
    {distro: 'Linux From Scratch',score: lfs},
    {distro: 'Fedora',score: fedora},
    {distro: 'Debian',score: deb},
    {distro: 'HandyLinux',score: handy},
    {distro: 'Ubuntu',score: ubuntu},
    {distro: 'Puppy Linux',score: puppy}
  );

  distros.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(distros[0].distro);
  $('#results').text(distros[0].distro);
  $('#scoreresult').text(distros[0].score);
  $('#moui').text(distros[1].distro);
  $('#mouiresult').text(distros[1].score);
  $('#bof').text(distros[2].distro);
  $('#bofresult').text(distros[2].score);

  switch(distros[0].distro) {
    case 'Arch Linux': $("#lien").attr("href", "https://archlinux.org"); $("#archdisk").show(); break;
    case 'Debian GNU/Linux': $("#lien").attr("href", "https://debian.org"); $("#gendisk").show(); break;
    case 'Linux From Scratch': $("#lien").attr("href", "http://linuxfromscratch.org"); break;
    case 'Fedora': $("#lien").attr("href", "https://getfedora.org"); $("#gendisk").show(); break;
    case 'HandyLinux': $("#lien").attr("href", "https://handylinux.org/"); break;
    case 'Puppy Linux':  $("#lien").attr("href", "http://puppylinux.com/"); break;
    case 'Gentoo': $("#lien").attr("href", "https://gentoo.org"); break;
    case 'Ubuntu': $("#lien").attr("href", "https://ubuntu.com"); $("#gendisk").show(); break;
  };

  $("#resultat").text(distros[0].distro);

};

if (windows == 1) {
    $('#windowschosen').show();
    $('#macoschosen').hide();
};
if (macos == 1) {
    $('#macoschosen').show();
    $('#windowschosen').hide();
};

document.getElementById('btn-restart').onclick = function() {
  arch = 0;
  deb = 0;
  lfs = 0;
  fedora = 0;
  handy = 0;
  puppy = 0;
  gentoo = 0;
  ubuntu = 0;
  windows = 0;
  macos = 0;
  distros = [];
};
