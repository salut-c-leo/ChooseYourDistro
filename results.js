var androidx86 = 0;
arch = 0;
deb = 0;
fedora = 0;
gentoo = 0;
lfs = 0;
opensuse = 0;
puppy = 0;
solus = 0;
ubuntu = 0;
voidlinux = 0;

var distros = []; // Un tableau qui permettra de sortir la meilleure distribution

// Opérations sur les variables, afin de déterminer la distribution à utiliser
// Quand on tombe sur une distribution qui ne correspond pas aux critères, on enlève un point, et inversement

//////  Compétences en informatique //////

document.getElementById('btn-infosis').onclick = function () { // Si l'utilisateur se sent à l'aise avec l'informatique, on incrémente ces variables
  arch = ++arch;
  deb = ++deb;
  fedora = ++fedora;
  gentoo = ++gentoo;
  lfs = ++lfs;
  opensuse = ++opensuse;
  puppy = ++puppy;
  solus = ++solus;
  ubuntu = ++ubuntu;
  voidlinux = ++voidlinux;
};
document.getElementById('btn-infomid').onclick = function () {
  deb = ++deb;
  fedora = ++fedora;
  opensuse = ++opensuse;
  solus = ++solus;
  puppy = ++puppy;
  ubuntu = ++ubuntu;
}
document.getElementById('btn-infosid').onclick = function () { // Au contraire, si l'informatique est une horreur, on incrémente ces variables
  androidx86 = ++androidx86;
  fedora = ++fedora;
  solus = ++solus;
  puppy = ++puppy;
  ubuntu = ++ubuntu;
};

///////

////// Out-of-the-box //////

document.getElementById('btn-ootbs').onclick = function () { // Si l'utilisateur veut pas se prendre la tête, on incrémente ces variables
  androidx86 = ++androidx86;
  deb = ++deb;
  fedora = ++fedora;
  opensuse = ++opensuse;
  solus = ++solus;
  puppy = ++puppy;
  ubuntu = ++ubuntu;

  arch = --arch;
  gentoo = --gentoo;
  lfs = --lfs;
  voidlinux = --voidlinux;
};
document.getElementById('btn-ootbd').onclick = function () { // Au contraire, si l'utilisateur aime bien configurer, on incrémente Arch/Gentoo/LFS
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
  voidlinux = ++voidlinux;

  androidx86 = --androidx86;
  deb = --deb;
  fedora = --fedora;
  opensuse = --opensuse;
  solus = --solus;
  puppy = --puppy;
  ubuntu = --ubuntu;
};

//////

////// Date d'ancienneté //////

document.getElementById('btn-olds').onclick = function () { // Si l'ordi est récent on va mettre des distros récentes ou avec GNOME/KDE par défaut
  androidx86 = ++androidx86;
  arch = ++arch;
  deb = ++deb;
  fedora = ++fedora;
  gentoo = ++gentoo;
  lfs = ++lfs;
  opensuse = ++opensuse;
  puppy = ++puppy;
  solus = ++solus;
  ubuntu = ++ubuntu;
  voidlinux = ++voidlinux;
};
document.getElementById('btn-oldd').onclick = function () { // Si l'ordi n'est pas récent, on va préférer des versions légères
  androidx86 = ++androidx86;
  arch = ++arch;
  deb = ++deb;
  fedora = ++fedora;
  opensuse = ++opensuse;
  puppy = ++puppy;
  ubuntu = ++ubuntu;
  voidlinux = ++voidlinux;

  gentoo = --gentoo;
  lfs = --lfs;
  solus = --solus;
};

//////

////// i586 ou i686 //////

document.getElementById('btn-volds').onclick = function () { // Les distributions supportant encore le x86 le font qu'à partir du i586, donc à la sortie du premier Pentium
  deb = ++deb; // Debian supporte aussi le i386 et i486
  fedora = ++fedora; // Fedora supporte aussi le i386 et i486
  opensuse = ++opensuse;
  voidlinux = ++voidlinux;

  androidx86 = --androidx86;
  arch = --arch; // Arch Linux ne supporte plus officiellement x86, et bien que archlinux32.org existe, il n'est pas inclus dans la liste pour éviter de semer la confusion
  ubuntu = --ubuntu; // Ubuntu ne supporte plus x86, à part les versions communautaires (MATE, Xubuntu, Lubuntu) qui devront bientôt se mettre au pas
  puppy = --puppy; // Se trouvait ici une incrémentation de la variable puppy, mais le site web indique que ce serait très désagréable à utiliser sur un Pentium (https://web.archive.org/web/20180322043118/puppylinux.com/arch.html)
};
document.getElementById('btn-voldid').onclick = function () {
  androidx86 = ++androidx86;
  arch = --arch; // Arch Linux ne supporte plus officiellement x86, et bien que archlinux32.org existe, il n'est pas inclus dans la liste pour éviter de semer la confusion
  deb = ++deb;
  fedora = ++fedora;
  opensuse = ++opensuse;
  puppy = ++puppy;
  voidlinux = ++voidlinux;

  ubuntu = --ubuntu; // Ubuntu ne supporte plus x86, à part les versions communautaires (MATE, Xubuntu, Lubuntu) qui devront bientôt se mettre au pas
};
// Vu que la question précédente attribue déjà des points sur l'ancienneté de l'ordinateur, on va pas en rajouter en cliquant sur le bouton Core 2 Duo

//////

////// Community //////

document.getElementById('btn-communitys').onclick = function () {
  androidx86 = ++androidx86;
  arch = ++arch;
  deb = ++deb;
  gentoo = ++gentoo;
  lfs = ++lfs;
  puppy = ++puppy;
  solus = ++solus;
  voidlinux = ++voidlinux;

  fedora = --fedora;
  opensuse = --opensuse;
  ubuntu = --ubuntu;
};
document.getElementById('btn-communityd').onclick = function () { // Ces trois distributions sont soutenues par trois entreprises différentes : Red Hat, SUSE, et Canonical. Malgré que ces distributions sont entièrement ou en partie faites par la communauté, il y a quand même une entreprise derrière.
  fedora = ++fedora;
  opensuse = ++opensuse;
  ubuntu = ++ubuntu;

  androidx86 = --androidx86;
  arch = --arch;
  deb = --deb;
  gentoo = --gentoo;
  lfs = --lfs;
  puppy = --puppy;
  solus = --solus;
  voidlinux = --voidlinux;
};

//////

////// Rolling Release //////

document.getElementById('btn-rollings').onclick = function () { // Si l'utilisateur veut de la rolling release
  arch = ++arch;
  gentoo = ++gentoo;
  opensuse = ++opensuse; // openSUSE Tumbleweed est une version en rolling release d'openSUSE
  solus = ++solus;
  voidlinux = ++voidlinux;

  androidx86 = --androidx86;
  deb = --deb;
  fedora = --fedora;
  lfs = --lfs;
  puppy = --puppy;
  ubuntu = --ubuntu;
};
document.getElementById('btn-rollingd').onclick = function () {
  androidx86 = ++androidx86;
  deb = ++deb;
  fedora = ++fedora;
  lfs = ++lfs; // Si tu mets pas de gestionnaire de paquets ou que la recompilation ça fait chier, ça fait une LFS très stable
  opensuse = ++opensuse; // openSUSE Leap est une version stable d'openSUSE
  puppy = ++puppy;
  ubuntu = ++ubuntu;

  arch = --arch;
  gentoo = --gentoo;
  solus = --solus;
  voidlinux = --voidlinux;
};

//////

////// Installation simple //////

document.getElementById('btn-inssis').onclick = function () {
  androidx86 = ++androidx86;
  deb = ++deb;
  fedora = ++fedora;
  opensuse = ++opensuse;
  solus = ++solus;
  puppy = ++puppy;
  ubuntu = ++ubuntu;

  arch = --arch;
  gentoo = --gentoo;
  lfs = --lfs;
  voidlinux = --voidlinux;

  showResult();
};

document.getElementById('btn-inssid').onclick = function () {
  arch = ++arch;
  gentoo = ++gentoo;
  lfs = ++lfs;
  voidlinux = ++voidlinux;

  androidx86 = --androidx86;
  deb = --deb;
  fedora = --fedora;
  opensuse = --opensuse;
  solus = --solus;
  puppy = --puppy;
  ubuntu = --ubuntu;

  showResult();
};

//////

function showResult() { // Merci à @Sp3r4z@twitter.com pour cette fonction super utile !

  // Pour masquer les conseils de chiffrement selon distrib
  $("#archdisk").hide();
  $("#gendisk").hide();
  $("#androidwarn").hide();

  // Classement des distributions
  distros.push(
    { distro: 'Android-x86', score: androidx86 },
    { distro: 'Arch Linux', score: arch },
    { distro: 'Debian', score: deb },
    { distro: 'Fedora', score: fedora },
    { distro: 'Gentoo', score: gentoo },
    { distro: 'Linux From Scratch', score: lfs },
    { distro: 'openSUSE', score: opensuse },
    { distro: 'Puppy Linux', score: puppy },
    { distro: 'Solus', score: solus },
    { distro: 'Ubuntu', score: ubuntu },
    { distro: 'Void Linux', score: voidlinux },
  );

  distros.sort(function (a, b) { // On classe les distros en fonction de leur score
    return b.score - a.score;
  });

  console.log(distros[0].distro);
  $('#results').text(distros[0].distro); // On affiche le nom de la distro dans le h3
  $('#scoreresult').text(distros[0].score); // Avec le score obtenu
  $('#moui').text(distros[1].distro); // La seconde distribution voit son nom s'afficher
  $('#mouiresult').text(distros[1].score); // Avec son score
  $('#bof').text(distros[2].distro); // La troisième distribution
  $('#bofresult').text(distros[2].score); // Avec son score

  switch (distros[0].distro) { // On propose le lien vers le site officiel, ainsi que le texte sur le chiffrement en fonction de la distro
    case 'Android-x86': $("#lien").attr("href", "http://www.android-x86.org/"); $("#androidwarn").show(); break;
    case 'Arch Linux': $("#lien").attr("href", "https://archlinux.org"); $("#archdisk").show(); break;
    case 'Debian': $("#lien").attr("href", "https://debian.org"); $("#gendisk").show(); break;
    case 'Fedora': $("#lien").attr("href", "https://getfedora.org"); $("#gendisk").show(); break;
    case 'Gentoo': $("#lien").attr("href", "https://gentoo.org"); break;
    case 'Linux From Scratch': $("#lien").attr("href", "http://linuxfromscratch.org"); break;
    case 'openSUSE': $("#lien").attr("href", "https://www.opensuse.org/"); $("#gendisk").show(); break;
    case 'Puppy Linux': $("#lien").attr("href", "http://puppylinux.com/"); break;
    case 'Solus': $("#lien").attr("href", "https://getsol.us"); $("#gendisk").show(); break;
    case 'Ubuntu': $("#lien").attr("href", "https://ubuntu.com"); $("#gendisk").show(); break;
    case 'Void Linux': $("#lien").attr("href", "https://voidlinux.eu"); $("#gendisk").show(); break;
  };
  $("#resultat").text(distros[0].distro);
};

document.getElementById('btn-restart').onclick = function () { // En appuyant sur le bouton "Recommencer", on remet les variables à zéro
  androidx86 = 0;
  arch = 0;
  deb = 0;
  fedora = 0;
  gentoo = 0;
  lfs = 0;
  opensuse = 0;
  puppy = 0;
  solus = 0;
  ubuntu = 0;
  voidlinux = 0;
  distros = [];
};