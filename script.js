document.addEventListener('DOMContentLoaded', function () {

  // ===== CURSEUR CUSTOM (anneau + dot) =====
  var cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .stat-card, .skill-group, .project-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hovering'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hovering'); });
  });


  // ===== CANVAS ÉTOILES =====
  var canvas = document.getElementById('starsCanvas');
  var ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  var stars = [];
  for (var i = 0; i < 120; i++) {
    stars.push({
      x:      Math.random() * canvas.width,
      y:      Math.random() * canvas.height,
      r:      Math.random() * 1.2 + 0.2,
      alpha:  Math.random() * 0.5 + 0.1,
      speed:  Math.random() * 0.004 + 0.002,
      offset: Math.random() * Math.PI * 2
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var t = Date.now() / 1000;
    stars.forEach(function (s) {
      var a = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 10 + s.offset));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(125,211,252,' + a + ')';
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  drawStars();


  // ===== APPAREIL PHOTO HERO =====
  setTimeout(function () {
    document.querySelectorAll('.hero-deco').forEach(function (el) {
      el.classList.add('loaded');
    });
  }, 700);


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
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        var lien = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (lien) lien.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

});