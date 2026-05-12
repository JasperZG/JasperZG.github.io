(function() {
  var btn = document.getElementById('back-to-top');
  var bar = document.getElementById('scroll-progress');

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.greedy-nav a[href*="#"]')
  );
  var sections = [];
  navLinks.forEach(function(link) {
    var hash = link.getAttribute('href').split('#')[1];
    if (!hash) return;
    var section = document.getElementById(hash);
    if (section) sections.push({ id: hash, link: link, section: section });
  });

  function clearActive() {
    navLinks.forEach(function(l) {
      l.parentElement && l.parentElement.classList.remove('is-current-section');
    });
  }

  function updateActiveSection() {
    if (!sections.length) return;
    var y = (window.scrollY || window.pageYOffset) + 140;
    var current = null;
    var bestTop = -Infinity;
    sections.forEach(function(s) {
      var top = s.section.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      if (top <= y && top > bestTop) {
        bestTop = top;
        current = s;
      }
    });
    clearActive();
    if (current) current.link.parentElement.classList.add('is-current-section');
  }

  function update() {
    var y = window.scrollY || window.pageYOffset;
    if (btn) {
      if (y > 400) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }
    if (bar) {
      var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      var pct = Math.min(100, (y / max) * 100);
      bar.style.width = pct + '%';
    }
    updateActiveSection();
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();

  if (btn) {
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function fallback(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  var bibtexButtons = document.querySelectorAll('.bibtex-copy');
  bibtexButtons.forEach(function(b) {
    b.addEventListener('click', function() {
      var article = b.closest('article') || b.closest('section') || b.parentElement;
      var pre = article ? article.querySelector('.bibtex-source') : null;
      var text = pre ? pre.textContent.trim() : '';
      var label = b.querySelector('.bibtex-copy__label');
      var original = label ? label.textContent : 'BibTeX';
      var done = function() {
        if (label) label.textContent = 'Copied!';
        b.classList.add('is-copied');
        setTimeout(function() {
          if (label) label.textContent = original;
          b.classList.remove('is-copied');
        }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function() {
          fallback(text, done);
        });
      } else {
        fallback(text, done);
      }
    });
  });
})();
