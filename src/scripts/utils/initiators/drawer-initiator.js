const DrawerInitiator = {
  init({
    button, drawer, content, itemNavigate,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
    itemNavigate.forEach((navigatedActive) => {
      navigatedActive.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer, button);
      });
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('fa-times');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('open');
    button.classList.remove('fa-times');
  },
};

export default DrawerInitiator;
