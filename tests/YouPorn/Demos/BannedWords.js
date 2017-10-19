this.BannedWords = function (browser) {
    browser
    .url("https://www.youporn.com")
    .resizeWindow(1600, 900)
    .pathIs(`/`, `Path is... "/"`)
    .click(`[name=query]`, `CSS`, `Click element`)
    .changeInput(`[name=query]`, `CSS`, `rape`, `Change input to... "rape"`)
    .click(`.js_track-search-btn`, `CSS`, `Click element`)
    .pathIs(`/search/`, `Path is... "/search/"`)
    .click(`[name=query]`, `CSS`, `Click element`)
    .changeInput(`[name=query]`, `CSS`, `murder`, `Change input to... "murder"`)
    .click(`#search-trigger`, `CSS`, `Click element`)
    .formSubmit(`div > div > div > div > div > form`, `CSS`, `Form submit`)
    .pathIs(`/search/`, `Path is... "/search/"`)
    .click(`#search-trigger`, `CSS`, `Click element`)
    .changeInput(`[name=query]`, `CSS`, `blood`, `Change input to... "blood"`)
    .click(`#search-trigger`, `CSS`, `Click element`)
    .formSubmit(`div > div > div > div > div > form`, `CSS`, `Form submit`)
    .pathIs(`/search/`, `Path is... "/search/"`)
    .end();
  }
