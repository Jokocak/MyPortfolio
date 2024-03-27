/**
 * This function toggles the visibility of the menu and changes the appearance
 * of the hamburger icon.
 */
function toggleMenu() {
  // Get the menu element
  const menu = document.querySelector(".menu-links");

  // Get the hamburger element
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the 'open' class on the menu to show/hide it
  menu.classList.toggle("open");

  // Toggle the 'open' class on the hamburger element to show/hide it
  icon.classList.toggle("open");
}

/**
 * Opens a URL in a new tab if the control key is pressed, otherwise navigates
 * to the URL in the current tab.
 *
 * @param {string} url The URL to open or navigate to.
 * @param {Event} event The click event object.
 * @returns {void}
 */
function openLinkInNewTab(url, event) {
  if (event.ctrlKey || event.metaKey) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
}
