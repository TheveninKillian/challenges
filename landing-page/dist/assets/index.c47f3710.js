import {
  o as A,
  c as s,
  a as i,
  b as g,
  d as e,
  F as C,
  e as o,
} from './vendor.9be053a0.js';
const a = {},
  I = { class: 'w-full text-center bg-black text-white font-bold py-4 px-2' },
  t = i(
    " 🎉 To celebrate Spence's launch, we will be waiving all fees for the entire month of April. "
  ),
  B = g(
    'span',
    { class: 'underline' },
    'You will be receiving 100% of the earnings.',
    -1
  ),
  l = i('🎉 ');
a.render = function (i, g) {
  return A(), s('div', I, [t, B, l]);
};
const r = {},
  R = { class: 'flex justify-between items-center py-8' },
  E = g('h1', { class: 'cursor-pointer font-extrabold' }, 'spense.', -1),
  w = g(
    'div',
    { class: 'header__hbg' },
    [
      g('img', {
        src: './assets/Hamburger-Menu.0d268974.svg',
        alt: 'menu de navigation pour mobile',
      }),
    ],
    -1
  ),
  c = g(
    'nav',
    { class: 'header__nav' },
    [
      g('ul', { class: 'flex' }, [
        g('li', { class: 'mr-6 ml-6' }, 'Business'),
        g('li', { class: 'mr-6' }, 'Pricing'),
        g('li', null, 'Features'),
      ]),
    ],
    -1
  ),
  D = g(
    'nav',
    { class: 'header__nav' },
    [
      g('ul', { class: 'flex items-center' }, [
        g('li', { class: 'mr-6' }, 'Login'),
        g('li', { class: 'btn' }, 'Get Started'),
      ]),
    ],
    -1
  );
r.render = function (i, g) {
  return A(), s('header', R, [E, w, c, D]);
};
const n = {},
  M = { class: 'hero' },
  Q = g(
    'div',
    { class: 'hero__img' },
    [g('img', { src: './assets/Hero-Image.bb4691f3.png' })],
    -1
  ),
  u = g(
    'div',
    { class: 'hero__wrapper' },
    [
      g(
        'h2',
        { class: 'font-bold' },
        'Share your unfiltered thoughts. Get paid.'
      ),
      g('p', { class: 'mt-2 opacity-70' }, [
        i(
          ' Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing '
        ),
        g('span', { class: 'italic' }, 'just'),
        i(' that. '),
      ]),
      g('ul', { class: 'mt-3 mb-7' }, [
        g('li', { class: 'mb-2' }, 'Receive 99% off the earnings.'),
        g('li', { class: 'mb-2' }, 'Get paid via Debit Card, ACH, or Paypal.'),
        g('li', null, 'Withdraw your earnings anytime'),
      ]),
      g('div', null, [
        g('input', {
          type: 'text',
          placeholder: 'john@example.com',
          class: 'w-170px border border-gray-400 py-4 pl-5 mr-3 rounded-md',
        }),
        g('input', {
          type: 'submit',
          value: 'Get Started',
          class: 'btn cursor-pointer',
        }),
      ]),
    ],
    -1
  );
n.render = function (i, g) {
  return A(), s('section', M, [Q, u]);
};
const G = {},
  d = { class: 'bg-black pt-10 pb-4' },
  m = e(
    '<div><h3>spense.</h3><p> Spense is en open plateform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing just that. </p></div><div><div class="md:float-right"><h3>Sitemap</h3><ul><li>Homepage</li></ul></div></div><div><div class="md:float-right"><h3>Ressouces</h3><ul><li>Support</li><li class="mt-1">Contact</li><li class="mt-1">FAQ</li></ul></div></div><div><div class="xl:float-right"><h3>Company</h3><ul><li>About</li><li class="mt-1">Customers</li><li class="mt-1">Blog</li></ul></div></div><div><div class="xl:float-right"><h3>Opportunities</h3><ul><li>Jobs</li></ul></div></div>',
    5
  );
G.render = function (i, g) {
  return A(), s('footer', d, [m]);
};
const S = {},
  y = { class: 'main' },
  H = g(
    'div',
    { class: 'banner-social flex justify-between py-10' },
    [
      g('img', {
        src: 'data:image/png;base64,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',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
        class: 'pinterest',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
        class: 'twitter',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
        class: 'reddit',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
        class: 'google',
      }),
      g('img', {
        src: 'data:image/png;base64,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',
        class: 'slack',
      }),
    ],
    -1
  ),
  J = g(
    'section',
    { class: 'section' },
    [
      g('div', { class: 'escrow rounded-lg' }, [
        g('div', { class: 'escrow__text' }, [
          g('h2', { class: 'font-bold' }, 'Secure your money with Escrow.'),
          g(
            'p',
            { class: 'opacity-70 mt-2' },
            ' Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scams. '
          ),
          g(
            'p',
            { class: 'mt-3 underline font-bold' },
            'Learn more about Escrow ->'
          ),
        ]),
        g('div', { class: 'escrow__img' }, [
          g('img', { src: './assets/Phone-Mockup.c39b3f7b.png' }),
        ]),
      ]),
      g('div', { class: 'editor mt-10' }, [
        g('div', { class: 'editor__text' }, [
          g('h2', { class: 'font-bold' }, 'A text editor like no other.'),
          g(
            'p',
            { class: 'opacity-70 mt-2' },
            " Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings. "
          ),
          g(
            'p',
            { class: 'mt-3 underline font-bold' },
            'Text Editor Live Demo ->'
          ),
        ]),
        g('div', { class: 'editor__img' }, [
          g('img', { src: './assets/Text-Editor.ac6a4f17.png' }),
        ]),
      ]),
    ],
    -1
  );
S.render = function (i, e) {
  const o = a,
    I = r,
    t = n,
    B = G;
  return A(), s(C, null, [g(o), g('div', y, [g(I), g(t)]), H, J, g(B)], 64);
};
o(S).mount('#app');
