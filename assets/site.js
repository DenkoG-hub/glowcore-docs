// Glowcore documentation: mobile navigation toggle.
// Without JavaScript the navigation stays fully visible.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
});

// Open an FAQ answer when the page is opened with its #id or a link to it is followed.
function openTargetDetails() {
  if (!location.hash) return;
  var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target && target.tagName === 'DETAILS') target.open = true;
}

document.addEventListener('DOMContentLoaded', openTargetDetails);
window.addEventListener('hashchange', openTargetDetails);
