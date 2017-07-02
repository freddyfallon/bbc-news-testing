class Homepage {
  constructor () {
    this.ukLink = 'a=UK';
  }

  visit(url) {
    browser.url(url);
  }

  clickUkLink() {
    browser.click(this.ukLink);
  }
}

module.exports = new Homepage();
