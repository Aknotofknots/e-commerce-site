const handleNavigationClick = function(e) {
  const textContent = e.target.textContent.toUpperCase();
  let clickedNavigationItem = 0;

  if (
    textContent === 'SHIRTS' ||
    textContent === 'ACCESSORIES' ||
    textContent === 'OUR WORLD'
  ) {
    this.setState({ isNavigationClicked: true });
    switch (textContent) {
      case 'SHIRTS':
        clickedNavigationItem = 1;
        this.setState({ clickedNavigationItem });
        break;
      case 'ACCESSORIES':
        clickedNavigationItem = 2;
        this.setState({ clickedNavigationItem });
        break;
      case 'OUR WORLD':
        clickedNavigationItem = 3;
        this.setState({ clickedNavigationItem });
        break;
      default:
        break;
    }
  } else if (
    e.target.id === 'search-input' ||
    e.target.id === 'search-icon-input'
  ) {
    this.setState({ isNavigationClicked: true });
  } else {
    clickedNavigationItem = '';
    this.setState({ isNavigationClicked: false, clickedNavigationItem });
  }
};

export default handleNavigationClick;
