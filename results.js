var arch = 0;
    deb = 0;
    devuan = 0;
    fedora = 0;
    handy = 0;
    puppy = 0;
    gentoo = 0;
    lfs = 0;
    ubuntu = 0;
    voidlinux = 0;
    windows = 0;
    macos = 0;

var distros = []; // Un tableau qui permettra de sortir la meilleure distribution

// Opérations sur les variables, afin de déterminer la distribution à utiliser
document.getElementById('btn-infosis').onclick = function() { // Si l'utilisateur se sent à l'aise avec l'informatique, on incrémente ces variables
  arch = ++arch;
  deb = ++deb;
  devuan = ++devuan;
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
  devuan = ++devuan;
  fedora = ++fedora;
  ubuntu = ++ubuntu;
  handy = ++handy;
  puppy = ++puppy;
};
document.getElementById('btn-ootbd').onclick = function() { // Au contraire, si l'utilisateur aime bien configurer, on incrémente Arch/Gentoo/LFS
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
};
document.getElementById('btn-windows').onclick = function() { // Si l'utilisateur veut une interface Windows-like, Windows gagne un point, on met macOS à 0
    windows = 1;
    macos = 0;
};
document.getElementById('btn-macos').onclick = function() { // L'inverse de l'autre fonction
    macos = 1;
    windows = 0;
};
document.getElementById('btn-olds').onclick = function() { // Si l'ordi est récent on va mettre des distros récentes ou avec GNOME/KDE par défaut
  fedora = ++fedora;
  ubuntu = ++ubuntu;
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
  deb = ++deb;
  devuan = ++devuan;
  handy = ++handy;
};
document.getElementById('btn-oldd').onclick = function() { // Si l'ordi n'est pas récent, on va préférer des versions légères (on enlève Gentoo et LFS parce que ça met sa vie sur des machines peu récentes)
  arch = ++arch;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  devuan = ++devuan;
};
document.getElementById('btn-volds').onclick = function() { // Sur de très vieilles machines (tout ce qui n'est pas x86_64), on ne met que des distros x86
  deb = ++deb;
  ubuntu = ++ubuntu; // Avec Lubuntu c'est possible à la limite
  puppy = ++puppy;
};
document.getElementById('btn-voldd').onclick = function() { // Entre 2006 et 2011
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  devuan = ++devuan;
  arch = ++arch;
  ubuntu = ++ubuntu; // Xubuntu ?
  fedora = ++fedora; // Fedora MATE/LXDE/XFCE ?
  // On aurait pu mettre Gentoo, mais faut avoir la foi pour compiler dessus
};
document.getElementById('btn-rollings').onclick = function() { // Si l'utilisateur veut de la rolling release
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs; // Si on met un gestionnaire de paquets ça passe
};
document.getElementById('btn-rollingd').onclick = function() {
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  devuan = ++devuan;
  ubuntu = ++ubuntu;
  fedora = ++fedora;
  lfs = ++lfs; // Si tu mets pas de gestionnaire de paquets ou que la recompilation ça fait chier, ça fait une LFS très stable
};
document.getElementById('btn-rollingdd').onclick = function() {
  deb = deb+2; // Debian Jessie ou Wheezy sont effectivement très stables, Stretch le sera dans un an (quand les versions seront dépassées)
};
document.getElementById('btn-systemds').onclick = function() {
    devuan = devuan+4; // 4 points de plus pour bien favoriser les distros non-systemd à la fin
    voidlinux = voidlinux+4;
    gentoo = ++gentoo+4;
    lfs = lfs+4;
    puppy = ++puppy; // Puppy Linux est surtout fait pour de l'USB donc juste 1 point
};
document.getElementById('btn-systemmid').onclick = function() {
    devuan = 0; // Puisque l'utilisateur veut systemd, on va pas lui proposer un non-systemd
    voidlinux = 0;
    gentoo = ++gentoo; // Gentoo propose une version systemd
    lfs = ++lfs; // Linux From Scratch propose une version systemd
    ubuntu = ++ubuntu;
    fedora = ++fedora;
    arch = ++arch;
    deb = ++deb;
    handy = ++handy;
};
document.getElementById('btn-systemdd').onclick = function() {
    devuan = ++devuan;
    voidlinux = ++voidlinux;
    gentoo = ++gentoo;
    lfs = ++lfs;
    ubuntu = ++ubuntu;
    fedora = ++fedora;
    arch = ++arch;
    deb = ++deb;
    handy = ++handy;
    puppy = ++puppy;
};
document.getElementById('btn-inssis').onclick = function() {
  ubuntu = ++ubuntu;
  handy = ++handy;
  puppy = ++puppy;
  deb = ++deb;
  devuan = ++devuan;
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
    {distro: 'Puppy Linux',score: puppy},
    {distro: 'Devuan', score: devuan},
    {distro: 'Void Linux', score: voidlinux}
  );

  distros.sort(function(a, b) { // On classe les distros en fonction de leur score
    return b.score - a.score;
  });

  console.log(distros[0].distro);
  $('#results').text(distros[0].distro); // On affiche le nom de la distro dans le h3
  $('#scoreresult').text(distros[0].score); // Avec le score obtenu
  $('#moui').text(distros[1].distro); // La seconde distribution voit son nom s'afficher
  $('#mouiresult').text(distros[1].score); // Avec son score
  $('#bof').text(distros[2].distro); // La troisième distribution
  $('#bofresult').text(distros[2].score); // Avec son score

  switch(distros[0].distro) { // On propose le lien vers le site officiel, ainsi que le texte sur le chiffrement en fonction de la distro
    case 'Arch Linux': $("#lien").attr("href", "https://archlinux.org"); $("#archdisk").show(); break;
    case 'Debian': $("#lien").attr("href", "https://debian.org"); $("#gendisk").show(); break;
    case 'Linux From Scratch': $("#lien").attr("href", "http://linuxfromscratch.org"); break;
    case 'Fedora': $("#lien").attr("href", "https://getfedora.org"); $("#gendisk").show(); break;
    case 'HandyLinux': $("#lien").attr("href", "https://handylinux.org/"); break;
    case 'Puppy Linux':  $("#lien").attr("href", "http://puppylinux.com/"); break;
    case 'Gentoo': $("#lien").attr("href", "https://gentoo.org"); break;
    case 'Ubuntu': $("#lien").attr("href", "https://ubuntu.com"); $("#gendisk").show(); break;
    case 'Void Linux': $("#lien").attr("href", "https://voidlinux.eu"); $("#gendisk").show(); break;
    case 'Devuan': $("#lien").attr("href", "https://devuan.org"); $("#gendisk").show(); break;
  };
  $("#resultat").text(distros[0].distro);

  if (windows != 0) { // On affiche le texte prévu pour l'interface Windows-like (et on désactive l'interface macOS)
      $('#windowschosen').show();
      $('#macoschosen').hide();
  }
  if (macos != 0) { // Et inversement
      $('#macoschosen').show();
      $('#windowschosen').hide();
  }
};

document.getElementById('btn-restart').onclick = function() { // En appuyant sur le bouton "Recommencer", on remet les variables à zéro
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
