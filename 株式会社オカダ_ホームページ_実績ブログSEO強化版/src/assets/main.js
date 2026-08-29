const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('seen');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const params = new URLSearchParams(location.search);
const category = params.get('category');
if (category) {
  const select = document.querySelector('select[name="category"]');
  const match = {
    kitchen: '業務用厨房機器・厨房設計',
    interior: '店舗設計・内装工事',
    consulting: '飲食店トータルコンサルティング'
  }[category];
  if (select && match) select.value = match;
}

const encode = data => new URLSearchParams(data).toString();
document.querySelectorAll('.js-contact-form').forEach(form => {
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      if (status) status.textContent = '必須項目をご確認ください。';
      return;
    }
    event.preventDefault();
    if (submit) {
      submit.disabled = true;
      submit.dataset.label = submit.innerHTML;
      submit.textContent = '送信中…';
    }
    if (status) status.textContent = '';
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      }).then(response => {
        if (!response.ok) throw new Error('送信に失敗しました');
      });
      form.reset();
      if (status) status.innerHTML = '<strong>お問い合わせを受け付けました。</strong><br>内容を確認のうえ、担当者よりご連絡します。';
      if (submit) submit.style.display = 'none';
    } catch (error) {
      if (status) status.innerHTML = '送信できませんでした。お手数ですが <a href="mailto:okada250421@gmail.com">okada250421@gmail.com</a> までメールでお問い合わせください。';
      if (submit) {
        submit.disabled = false;
        submit.innerHTML = submit.dataset.label || '送信する';
      }
    }
  });
});
