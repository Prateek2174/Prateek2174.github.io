(function () {
  var body = document.querySelector('.project-body');
  if (!body) return;

  var headings = Array.prototype.slice.call(body.querySelectorAll('h2'));
  if (headings.length < 2) return;

  // Assign IDs and build links
  var ol = document.createElement('ol');
  headings.forEach(function (h, i) {
    var text = h.textContent.trim();
    var slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    h.id = slug;

    var li = document.createElement('li');
    var num = document.createElement('span');
    num.className = 'toc-num';
    num.textContent = String(i + 1).padStart(2, '0');
    var a = document.createElement('a');
    a.href = '#' + slug;
    a.textContent = text;
    li.appendChild(num);
    li.appendChild(a);
    ol.appendChild(li);
  });

  var nav = document.createElement('nav');
  nav.className = 'toc';
  nav.setAttribute('aria-label', 'Table of contents');
  nav.appendChild(ol);

  body.parentNode.insertBefore(nav, body);
})();
