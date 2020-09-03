const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content-item
function selectItem(e) {
  // remove border from previous tab
  removeBorder();
  // remove class 'show' from previous tab
  removeShow();
  // add border to current tab
  this.classList.add('tab-border');
  // grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // add class 'show' to current tab
  tabContentItem.classList.add('show');
}

// Remove border from current tab
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

// doesn't show current tab
function removeShow() {
  tabContentItems.forEach(contentItem => contentItem.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));