const DrawerInitiator = {
  init({ button, drawer, list }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer);
    });

    list.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        this._closeDrawer(event, button, drawer);
      });
    });
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.toggle('is-active');
    drawer.classList.toggle('active');
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('is-active');
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;
