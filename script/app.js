const btnShare = document.querySelector('.decor-tips__btn-share');
const shareIcons = document.querySelector('.decor-tips__share-icons');
const closeShareIconsBtn = document.querySelector(
  '.decor-tips__share-svg--secondary--list-item'
);

const expandedShareIcons = () => {
  shareIcons.setAttribute('aria-hidden', 'false');
  btnShare.setAttribute('aria-expanded', 'true');
  btnShare.style.backgroundColor = 'hsl(214, 17%, 51%)';
  btnShare.style.color = '#fff';
  shareIcons.style.opacity = '1';
  shareIcons.style.visibility = 'visible';
  shareIcons.style.backgroundColor = 'hsl(217, 19%, 35%)';
};

const collapsedShareIcons = () => {
  shareIcons.setAttribute('aria-hidden', 'true');
  btnShare.setAttribute('aria-expanded', 'false');
  btnShare.style.backgroundColor = '';
  btnShare.style.color = '';
  shareIcons.style.opacity = '0';
  shareIcons.style.visibility = 'hidden ';
  shareIcons.style.backgroundColor = '';
};

const toggleShareIcons = () => {
  const isExpanded = btnShare.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    collapsedShareIcons();
  } else {
    expandedShareIcons();
  }
};

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

btnShare.addEventListener('click', e => {
  if (btnShare.contains(e.target)) {
    if (isTouchDevice()) {
      toggleShareIcons();
    }
  }
});

closeShareIconsBtn.addEventListener('click', e => {
  if (closeShareIconsBtn.contains(e.target)) {
    if (isTouchDevice()) {
      toggleShareIcons();
    }
  }
});

shareIcons.addEventListener('click', e => {
  if (shareIcons.contains(e.target)) {
    if (isTouchDevice()) {
      toggleShareIcons();
    }
  }
});

btnShare.addEventListener('mouseenter', expandedShareIcons);
btnShare.addEventListener('mouseleave', collapsedShareIcons);

btnShare.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleShareIcons();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const isExpanded = btnShare.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      toggleShareIcons();
    }
  }
});

document.addEventListener('click', e => {
  if (btnShare.contains(e.target)) {
    if (isTouchDevice()) {
      toggleShareIcons();
    }
  } else {
    const isExpanded = btnShare.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      toggleShareIcons();
    }
  }
});
