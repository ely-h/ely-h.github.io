document.addEventListener('DOMContentLoaded', function () {

  // ===== CURSEUR CUSTOM =====
  const dot = document.getElementById('cursorDot');

  document.addEventListener('mousemove', function (e) {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseenter', function () {
    dot.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function () {
    dot.style.opacity = '0';
  });

  // Make cursor bigger on interactive elements
  var interactifs = document.querySelectorAll('a, button, .project-card, .skill-group, .stat-card');

  interactifs.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      dot.style.transform = 'translate(-50%, -50%) scale(3)';
      dot.style.opacity = '0.4';
    });
    el.addEventListener('mouseleave', function () {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.style.opacity = '1';
    });
  });


  // ===== SCROLL REVEAL =====
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });


  // ===== NAV ACTIVE AU SCROLL =====
  var sections = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-links a');

  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (a) {
          a.classList.remove('active');
        });
        var lien = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (lien) lien.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (s) {
    navObserver.observe(s);
  });

});