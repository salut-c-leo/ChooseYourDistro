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

  // Classement des distributions
  distros.push({
    distro: 'Arch Linux',
    score: arch,
  });

  distros.push({
    distro: 'Gentoo',
    score: gentoo
  });

  distros.push({
    distro: 'Sabayon',
    score: sabayon
  });

  distros.push({
    distro: 'Fedora',
    score: fedora
  });

  distros.push({
    distro: 'Debian GNU/Linux',
    score: deb
  });

  distros.push({
    distro: 'HandyLinux',
    score: handy
  });

  distros.push({
    distro: 'Ubuntu',
    score: ubuntu
  });

  distros.push({
    distro: 'Puppy Linux',
    score: puppy
  });

  distros.push({
    distro: 'Chromium OS',
    score: chromium
  });

  distros.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(distros.distro);
  console.log(distros[0].distro);
  $('#results').text(distros[0].distro);
  $('#moui').text(distros[1].distro);
  $('#mwa').text(distros[0].distro);

  if(distros[0].distro == 'Arch Linux') {
    $("#lien").attr("href", "https://archlinux.org"),
    $("#resultat").text(distros[0].distro),
    $("#archdisk").show()
  };
  if(distros[0].distro == 'Debian GNU/Linux') {
        $("#lien").attr("href", "https://debian.org"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'Chromium OS') {
        $("#lien").attr("href", "https://arnoldthebat.co.uk/wordpress/chromium-os/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Fedora') {
        $("#lien").attr("href", "https://getfedora.org"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'HandyLinux') {
        $("#lien").attr("href", "https://handylinux.org/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Puppy Linux') {
        $("#lien").attr("href", "http://puppylinux.com/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Gentoo') {
        $("#lien").attr("href", "https://gentoo.org"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Sabayon') {
        $("#lien").attr("href", "https://www.sabayon.org/"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'Ubuntu') {
        $("#lien").attr("href", "https://www.ubuntu.com"),
        $("#resultat").text(distros[0].distro)
        $("#gendisk").show()
  };
};

document.getElementById('btn-inssid').onclick = function() {
  arch = ++arch;
  gentoo = ++gentoo;

  // Classement des distributions
  distros.push({
    distro: 'Arch Linux',
    score: arch
  });

  distros.push({
    distro: 'Gentoo',
    score: gentoo
  });

  distros.push({
    distro: 'Sabayon',
    score: sabayon
  });

  distros.push({
    distro: 'Fedora',
    score: fedora
  });

  distros.push({
    distro: 'Debian GNU/Linux',
    score: deb
  });

  distros.push({
    distro: 'HandyLinux',
    score: handy
  });

  distros.push({
    distro: 'Ubuntu',
    score: ubuntu
  });

  distros.push({
    distro: 'Puppy Linux',
    score: puppy
  });

  distros.push({
    distro: 'Chromium OS',
    score: chromium
  });

  distros.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(distros.distro);
  console.log(distros[0].distro);
  $('#results').text(distros[0].distro);
  $('#moui').text(distros[1].distro);
  $('#mwa').text(distros[0].distro);

  if(distros[0].distro == 'Arch Linux') {
        $("#lien").attr("href", "https://archlinux.org"),
        $("#resultat").text(distros[0].distro),
        $("#archdisk").show()
  };
  if(distros[0].distro == 'Debian GNU/Linux') {
        $("#lien").attr("href", "https://debian.org"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'Chromium OS') {
        $("#lien").attr("href", "https://arnoldthebat.co.uk/wordpress/chromium-os/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Fedora') {
        $("#lien").attr("href", "https://getfedora.org"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'HandyLinux') {
        $("#lien").attr("href", "https://handylinux.org/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Puppy Linux') {
        $("#lien").attr("href", "http://puppylinux.com/"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Gentoo') {
        $("#lien").attr("href", "https://gentoo.org"),
        $("#resultat").text(distros[0].distro)
  };
  if(distros[0].distro == 'Sabayon') {
        $("#lien").attr("href", "https://www.sabayon.org/"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
  if(distros[0].distro == 'Ubuntu') {
        $("#lien").attr("href", "https://www.ubuntu.com"),
        $("#resultat").text(distros[0].distro),
        $("#gendisk").show()
  };
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
