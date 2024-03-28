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

  if (icon) {
  }
}

/**
 * This function toggles the styling for the menu links in the burger menu
 * so that they are not visible when the burger menu is closed.
 */
function toggleStyle() {
  // Gets the burger menu
  var menuLinks = document.querySelector(".menu-links");

  // Gets the list of burger menu links
  var menuLinksList = document.querySelectorAll(".menu-links li");

  // Checks if the menu is being shown or not
  if (menuLinks.classList.contains("show")) {
    // Removes show class from the class list
    menuLinks.classList.remove("show");

    // Turns off all styling
    menuLinks.style.backgroundColor = "";
    menuLinks.style.border = "none";
    menuLinksList.forEach(function (item) {
      item.style.border = "none";
    });
  } else {
    // Adds show class to the class list
    menuLinks.classList.add("show");

    // Turns on all styling
    menuLinks.style.backgroundColor = "white";
    menuLinks.style.border = "2px solid black";
    menuLinksList.forEach(function (item) {
      item.style.border = "2px solid black";
    });
  }
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
