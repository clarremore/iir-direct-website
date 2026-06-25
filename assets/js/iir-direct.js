/* =========================
   ELEMENTS
========================= */
const examplePreviewModalEl = document.getElementById('examplePreviewModal');
const examplePreviewImage = document.getElementById('examplePreviewImage');
const examplePreviewLabel = document.getElementById('examplePreviewLabel');
const examplePreviewLink = document.getElementById('examplePreviewLink');
const examplePreviewModalLabel = document.getElementById('examplePreviewModalLabel');
const termsPreviewButton = document.getElementById('termsPreviewButton');

const footerYear = document.getElementById('year');

const examplePreviewModal = examplePreviewModalEl
  ? new bootstrap.Modal(examplePreviewModalEl)
  : null;

/* =========================
   DATA
========================= */
const campaignData = {
  company: {
    eyebrow: 'Email Campaign',
    heading: 'Company Promotion',
    items: [
      {
        idLabel: 'Exxon DTE',
        image: 'images/hero-industrial-1.png',
        link: 'https://www.iirdirect.com/templates/exxon/DTE/index.html'
      }
    ]
  },
  product: {
    eyebrow: 'Email Campaign',
    heading: 'Product Promotion',
    items: [
      {
        idLabel: 'CWFC',
        image: 'images/hero-industrial-2.png',
        link: 'https://www.iirdirect.com/templates/cwfc.htm'
      }
    ]
  },
  event: {
    eyebrow: 'Email Campaign',
    heading: 'Event Promotion',
    items: [
      {
        idLabel: 'GE',
        image: 'images/hero-industrial-3.png',
        link: 'https://www.iirdirect.com/templates/ge/'
      }
    ]
  },
  press: {
    eyebrow: 'Email Campaign',
    heading: 'Press Releases',
    items: [
      {
        idLabel: 'Bomac',
        image: 'images/hero-industrial-4.png',
        link: 'https://iirdirect.com/templates/bomac/bomac.html'
      }
    ]
  },
  all: {
    eyebrow: 'Email Campaign',
    heading: 'All Campaigns',
    items: [
      {
        idLabel: 'Exxon DTE',
        image: 'images/hero-industrial-1.png',
        link: 'https://www.iirdirect.com/templates/exxon/DTE/index.html'
      },
      {
        idLabel: 'CWFC',
        image: 'images/hero-industrial-2.png',
        link: 'https://www.iirdirect.com/templates/cwfc.htm'
      },
      {
        idLabel: 'GE',
        image: 'images/hero-industrial-3.png',
        link: 'https://www.iirdirect.com/templates/ge/'
      },
      {
        idLabel: 'Bomac',
        image: 'images/hero-industrial-4.png',
        link: 'https://iirdirect.com/templates/bomac/bomac.html'
      },
      {
        idLabel: 'HPI, LLC',
        image: 'images/hero-industrial-5.png',
        link: 'https://www.iirdirect.com/templates/emailalert219.htm'
      }
    ]
  }
};

const webinarData = {
  all: {
    eyebrow: 'Webinars',
    heading: 'All Webinars',
    items: [
      {
        idLabel: 'Aveva Webinar',
        image: 'images/webinars-1.png',
        link: 'https://www.iirdirect.com/templates/aveva/webinar2.htm'
      },
      {
        idLabel: 'Sunbelt Webinar',
        image: 'images/webinars-2.png',
        link: 'https://www.iirdirect.com/templates/sunbelt/20200616/sunbelt.htm'
      },
      {
        idLabel: 'Ansell Webinar',
        image: 'images/webinars-3.png',
        link: 'https://www.iirdirect.com/templates/ansell/webinar.htm'
      },
      {
        idLabel: 'Sulzer Webinar',
        image: 'images/webinars-4.png',
        link: 'https://www.iirdirect.com/templates/sulzer/20181004/webinar.htm'
      },
      {
        idLabel: 'Enchanted Rock Webinar',
        image: 'images/webinars-5.png',
        link: 'https://www.iirdirect.com/templates/enchantedrock/webinar.htm'
      },
      {
        idLabel: 'Gateway Group Webinar',
        image: 'images/webinars-6.png',
        link: 'https://www.iirdirect.com/templates/gatewaygroup/webinar2.htm'
      }
    ]
  }
};

const bannerData = {
  homepage: {
    eyebrow: 'Banner Advertising',
    heading: 'Home Page',
    items: [
      {
        idLabel: 'Home Page Banner',
        image: 'images/banner-ad-home-page.png',
        link: 'https://www.industrialinfo.com/'
      }
    ]
  },
  digest: {
    eyebrow: 'Banner Advertising',
    heading: 'News Digest',
    items: [
      {
        idLabel: 'News Digest Banner',
        image: 'images/banner-ad-news.png',
        link: 'https://www.industrialinfo.com/news/'
      }
    ]
  }
};

/* =========================
   MODAL
========================= */
function openExampleModal(image, label, link) {
  if (!examplePreviewModal) return;

  if (examplePreviewImage) {
    examplePreviewImage.src = image || '';
    examplePreviewImage.alt = label || 'Preview';
  }

  if (examplePreviewLabel) {
    examplePreviewLabel.textContent = label || '';
  }

  if (examplePreviewModalLabel) {
    examplePreviewModalLabel.textContent = label || 'Preview';
  }

  if (examplePreviewLink) {
    if (link) {
      examplePreviewLink.href = link;
      examplePreviewLink.style.display = 'inline-block';
    } else {
      examplePreviewLink.removeAttribute('href');
      examplePreviewLink.style.display = 'none';
    }
  }

  examplePreviewModal.show();
}

/* =========================
   RENDERERS
========================= */
function renderCardGrid(container, items) {
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <div class="col-12 col-md-6 col-lg-4">
      <button
        type="button"
        class="email-example-card w-100 text-start preview-card-btn"
        data-image="${item.image}"
        data-label="${item.idLabel}"
        data-link="${item.link || ''}"
        aria-label="Open preview for ${item.idLabel}"
      >
        <img src="${item.image}" alt="${item.idLabel}">
        <span class="email-example-label">${item.idLabel}</span>
      </button>
    </div>
  `).join('');
}

function renderCampaign(key) {
  const data = campaignData[key];
  const eyebrow = document.getElementById('campaignEyebrow');
  const heading = document.getElementById('campaignHeading');
  const content = document.getElementById('campaignContent');

  if (!data) return;
  if (eyebrow) eyebrow.textContent = data.eyebrow;
  if (heading) heading.textContent = data.heading;
  renderCardGrid(content, data.items);
}

function renderWebinar(key) {
  const data = webinarData[key];
  const eyebrow = document.getElementById('webinarEyebrow');
  const heading = document.getElementById('webinarHeading');
  const content = document.getElementById('webinarContent');

  if (!data) return;
  if (eyebrow) eyebrow.textContent = data.eyebrow;
  if (heading) heading.textContent = data.heading;
  renderCardGrid(content, data.items);
}

function renderBanner(key) {
  const data = bannerData[key];
  const eyebrow = document.getElementById('bannerEyebrow');
  const heading = document.getElementById('bannerHeading');
  const content = document.getElementById('bannerContent');

  if (!data) return;
  if (eyebrow) eyebrow.textContent = data.eyebrow;
  if (heading) heading.textContent = data.heading;
  renderCardGrid(content, data.items);
}

/* =========================
   PANEL SYSTEM
========================= */
const panelConfigs = {
  email: {
    card: document.getElementById('emailCampaignCard'),
    menu: document.getElementById('emailCampaignMenu'),
    panel: document.getElementById('emailCampaignExpand'),
    buttons: document.querySelectorAll('.email-side-btn:not(.webinar-side-btn):not(.banner-side-btn)'),
    render: renderCampaign,
    defaultKey: 'all',
    getKey: (button) => button.dataset.campaign,
    shiftCards: []
  },
  webinar: {
    card: document.getElementById('webinarCard'),
    menu: document.getElementById('webinarMenu'),
    panel: document.getElementById('webinarExpand'),
    buttons: document.querySelectorAll('.webinar-side-btn'),
    render: renderWebinar,
    defaultKey: 'all',
    getKey: (button) => button.dataset.webinar,
    shiftCards: ['email']
  },
  banner: {
    card: document.getElementById('bannerAdsCard'),
    menu: document.getElementById('bannerAdsMenu'),
    panel: document.getElementById('bannerAdsExpand'),
    buttons: document.querySelectorAll('.banner-side-btn'),
    render: renderBanner,
    defaultKey: 'digest',
    getKey: (button) => button.dataset.banner,
    shiftCards: ['email', 'webinar']
  }
};

function setActivePanelButton(panelName, key) {
  const config = panelConfigs[panelName];
  if (!config) return;

  config.buttons.forEach((btn) => {
    btn.classList.toggle('active', config.getKey(btn) === key);
  });
}

function clearShiftedCards() {
  Object.values(panelConfigs).forEach((config) => {
    if (config.card) {
      config.card.classList.remove('shift-left');
    }
  });
}

function applyShiftCards(panelName) {
  clearShiftedCards();

  const config = panelConfigs[panelName];
  if (!config) return;

  config.shiftCards.forEach((name) => {
    const targetCard = panelConfigs[name]?.card;
    if (targetCard) {
      targetCard.classList.add('shift-left');
    }
  });
}

function closePanel(panelName) {
  const config = panelConfigs[panelName];
  if (!config) return;

  if (config.card) {
    config.card.classList.remove('active');
    config.card.setAttribute('aria-expanded', 'false');
  }

  if (config.menu) config.menu.classList.remove('show');
  if (config.panel) config.panel.classList.remove('show');
}

function closeAllPanels() {
  Object.keys(panelConfigs).forEach(closePanel);
  clearShiftedCards();
}

function openPanel(panelName) {
  Object.keys(panelConfigs).forEach((name) => {
    if (name !== panelName) {
      closePanel(name);
    }
  });

  const config = panelConfigs[panelName];
  if (!config) return;

  if (config.card) {
    config.card.classList.add('active');
    config.card.setAttribute('aria-expanded', 'true');
  }

  if (config.menu) config.menu.classList.add('show');
  if (config.panel) config.panel.classList.add('show');

  applyShiftCards(panelName);
}

function togglePanel(panelName) {
  const config = panelConfigs[panelName];
  if (!config || !config.panel) return;

  const isOpen = config.panel.classList.contains('show');
  isOpen ? closeAllPanels() : openPanel(panelName);
}

/* =========================
   PANEL EVENTS
========================= */
Object.entries(panelConfigs).forEach(([panelName, config]) => {
  if (config.card) {
    config.card.addEventListener('click', () => togglePanel(panelName));

    config.card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePanel(panelName);
      }
    });
  }

  config.buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      const key = config.getKey(button);
      setActivePanelButton(panelName, key);
      config.render(key);
      openPanel(panelName);
    });
  });
});

/* =========================
   TERMS PREVIEW BUTTON
========================= */
if (termsPreviewButton) {
  termsPreviewButton.addEventListener('click', function () {
    openExampleModal(
      'images/iir_terms_definitions.png',
      'Terms & Definitions Preview',
      ''
    );
  });
}

/* =========================
   PREVIEW CARD CLICK DELEGATION
========================= */
document.addEventListener('click', function (e) {
  const previewCard = e.target.closest('.preview-card-btn');
  if (!previewCard) return;

  if (previewCard.id === 'termsPreviewButton') return;

  openExampleModal(
    previewCard.dataset.image,
    previewCard.dataset.label,
    previewCard.dataset.link
  );
});

function getHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return 0;

  return header.offsetHeight + -1;
}

function scrollToSection(targetId) {
  if (targetId === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  const offset = getHeaderOffset();
  const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth'
  });
}

/* =========================
   NAV ACTIVE ON SCROLL
========================= */
const navLinks = document.querySelectorAll('.navbar .nav-link');
const trackedSections = [
  { id: 'top', element: document.body },
  { id: 'services', element: document.getElementById('services') },
  { id: 'metrics', element: document.getElementById('metrics') },
  { id: 'definitions', element: document.getElementById('definitions') },
  { id: 'contact', element: document.getElementById('contact') }
];

function setActiveNav(targetId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${targetId}`;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function updateActiveNav() {
  const scrollPosition = window.scrollY + 220;
  let current = 'top';

  trackedSections.forEach((item) => {
    if (!item.element) return;

    if (item.id === 'top') {
      if (window.scrollY < 120) {
        current = 'top';
      }
      return;
    }

    if (scrollPosition >= item.element.offsetTop) {
      current = item.id;
    }
  });

  setActiveNav(current);
}

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    const targetId = href.replace('#', '');
    setActiveNav(targetId);
    scrollToSection(targetId);

    const navCollapseEl = document.getElementById('primaryNav');
    if (navCollapseEl && navCollapseEl.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
      bsCollapse.hide();
    }

    setTimeout(updateActiveNav, 500);
  });
});

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

/* =========================
   CONTACT
========================= */
document.querySelectorAll('.contact-chip').forEach(chip => {
  chip.addEventListener('click', () => chip.classList.toggle('active'));
});

document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn     = document.getElementById('contact-submit-btn');
  const errorEl = document.getElementById('contact-form-error');
  const formEl  = document.getElementById('contact-form');
  const doneEl  = document.getElementById('contact-form-success');

  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const goals     = document.getElementById('campaignGoals').value.trim();
  const interests = [...document.querySelectorAll('.contact-chip.active')]
    .map(c => c.dataset.interest).join(', ');

  // Validation
  if (!firstName || !email) {
    errorEl.textContent = 'Please fill in your first name and email.';
    errorEl.hidden = false;
    return;
  }

  // Loading state
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Sending…';
  errorEl.hidden = true;

  try {
    const body = new FormData();
    body.append('first_name', firstName);
    body.append('last_name',  lastName);
    body.append('email',      email);
    body.append('interests',  interests || 'None selected');
    body.append('goals',      goals     || 'Not provided');

    const res  = await fetch('contact.php', { method: 'POST', body });
    const data = await res.json();

    if (!res.ok || data.error) throw new Error(data.error || 'Failed');

    // Success
    formEl.hidden = true;
    doneEl.hidden = false;

  } catch (err) {
    console.error('Submit error:', err);
    errorEl.textContent = 'Something went wrong — please try again or email us directly.';
    errorEl.hidden = false;
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i>Submit request';
  }
});

/* =========================
   DYNAMIC FOOTER YEAR
========================= */
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

/* =========================
   DEFAULT LOAD
========================= */
Object.entries(panelConfigs).forEach(([panelName, config]) => {
  setActivePanelButton(panelName, config.defaultKey);
  config.render(config.defaultKey);
});

closeAllPanels();
updateActiveNav();