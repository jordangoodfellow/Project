const TIMEOUT = 10000;
const random = "" + parseInt(Math.random() * 1000000);
const random1 = "" + parseInt(Math.random() * 1000000);
const random2 = "" + parseInt(Math.random() * 1000000);
const random3 = "" + parseInt(Math.random() * 1000000);

module.exports = {
  "[HubTraffic] Stats Overview - Device & Country ": function(browser) {

    bindHelpers(browser);
    bindComponents(browser);

    var baseUrl = browser.launchUrl || `https://www.hubtraffic.com`;


    browser
      .url(`${baseUrl}/`, 1148, 612, `Load page... "${baseUrl}/"`)
      .pathIs(`/`, `Init page... "/"`)
      .changeInput("form > div:nth-of-type(2) > div:nth-of-type(2) > input", `qwe123`, `Change input to... "qwe123"`)
      .click("form > div:nth-of-type(2) > div > input", `Click element`)
      .click("form > div:nth-of-type(2) > div:nth-of-type(2) > input", `Click element`)
      .click("form > div:nth-of-type(2) > div:nth-of-type(2) > input", `Click element`)
      .click("[name=yt0]", `Click element`)
      .pathIs(`/profile`, `Init page... "/profile"`)
      .click("div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".sites-site", `Click element`)
      .click("form > :nth-child(6) .domainAtag", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".sites-site", `Click element`)
      .click(".sites-site", `Click element`)
      .click("form > :nth-child(6) .domainAtag", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".sites-site", `Click element`)
      .click("form > :nth-child(6) .domainAtag", `Click element`)
      .click(".pornhub-site", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .formSubmit("form", `Form submit`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".sites-site", `Click element`)
      .click(".keezmovies-site", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".sites-site", `Click element`)
      .click(".sites-site", `Click element`)
      .click("form > div:nth-of-type(4) > ul > li:nth-of-type(8) > div", `Click element`)
      .click("form > :nth-child(6) .domainAtag", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".all-domains", `Click element`)
      .click("div:nth-of-type(3) > ul > li > div > a", `Click element`)
      .click("div:nth-of-type(3) > ul > li:nth-of-type(2) > div > a", `Click element`)
      .click("div:nth-of-type(3) > ul > li:nth-of-type(3) > div > a", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".all-domains", `Click element`)
      .click(".all-domains", `Click element`)
      .click("div:nth-of-type(3) > ul > li > div > a", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".dropdown-current", `Click element`)
      .click("form > div:nth-of-type(2) > ul > li:nth-of-type(2) > a", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".dropdown-current", `Click element`)
      .click(".dropdown-current", `Click element`)
      .click("form > div:nth-of-type(2) > ul > li:nth-of-type(3) > a", `Click element`)
      .click(".center-box .datetimepicker-inline .site-button", `Click element`)
      .pathIs(`/profile/deviceAndCountry`, `Init page... "/profile/deviceAndCountry"`)
      .click(".main-content", `Click element`)
      .click("div > form > div:nth-of-type(5) > a", `Click element`)
      .click(".login-box", `Click element`)
      .click("div > ul > li:nth-of-type(3) > a", `Click element`)
      .pathIs(`/`, `Init page... "/"`)
      .end();
  }
};

/*
 * Components
 */

function bindComponents(browser) {

  browser.components = {};


}

/*
 * Auto-Generated helper code
 */





function bindHelpers(browser) {


  var oldUrl = browser.url;
  var oldBack = browser.back;
  var oldForward = browser.forward;
  var oldRefresh = browser.refresh;

  browser.url = function(pathname, width, height, description) {
    oldUrl(pathname);
    browser.resizeWindow(width, height);
    return this;
  };

  browser.back = function(description) {
    browser.perform(() => comment(description));
    browser.pause(5);
    oldBack();
    return this;
  };

  browser.refresh = function(description) {
    browser.perform(() => comment(description));
    oldRefresh();
    return this;
  };

  browser.forward = function(description) {
    browser.perform(() => comment(description));
    oldForward();
    return this;
  };

  browser.pathIs = function(pathname, description, timeout) {

    var attempts = parseInt((timeout || TIMEOUT) / 1000);
    var currentAttempt = 0;

    function checkForPageLoadWithPathname(pathname) {
      browser.execute(function() {
        return {
          pathname: window.location.pathname,
          readyState: document.readyState
        };
      }, [], function(result) {
        if (result.value.readyState === "complete" && (pathname instanceof RegExp ? pathname.test(result.value.pathname) : result.value.pathname === pathname)) {
          this.assert.ok(true, description)
        } else if (currentAttempt === attempts) {
          this.assert.ok(false, description)
        } else {
          currentAttempt++;
          browser.pause(1000);
          checkForPageLoadWithPathname(pathname);
        }
      });
    }

    checkForPageLoadWithPathname(pathname);

    browser.execute(function() {
      window.alert = function() {};
      window.confirm = function() {
        return true;
      };
    }, []);

    return this;

  };

  browser.executeScript = function(description, script) {
    browser.perform(() => comment(description));
    browser.execute(function(script) {
      eval(script);
    }, [script], function(result) {});

    return this;
  };

  browser.switchToWindow = function(windowIndex, description) {
    browser.perform(() => comment(description));

    browser.windowHandles(function(result) {
      this.switchWindow(result.value[windowIndex]);
    });

    return this;
  };

  browser.scrollWindow = function(x, y, description) {
    browser.perform(() => comment(description));
    browser.execute(function(x, y) {
      window.scrollTo(x, y);
    }, [x, y], function(result) {});

    return this;
  };

  browser.scrollElement = function(selector, x, y, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector, x, y) {
      (function(el, x, y) {
        el.scrollLeft = x;
        el.scrollTop = y;
      })(document.querySelector(selector), x, y);
    }, [selector, x, y], function(result) {});

    return this;
  };

  browser.scrollWindowToElement = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector, value) {
      (function(el) {
        if (el) {
          var elsScrollY = el.getBoundingClientRect().top + window.scrollY - el.offsetHeight;
          window.scrollTo(0, elsScrollY);
        }
      })(document.querySelector(selector), value);
    }, [selector]);

    return this;
  };

  browser.click = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector) {

      (function(element) {

        function triggerMouseEvent(node, eventType) {
          var clickEvent = document.createEvent('MouseEvents');
          clickEvent.initEvent(eventType, true, true);
          node.dispatchEvent(clickEvent);
        }

        triggerMouseEvent(element, "mouseover");
        triggerMouseEvent(element, "mousedown");
        triggerMouseEvent(element, "mouseup");
        triggerMouseEvent(element, "click");

      })(document.querySelector(selector));

    }, [selector]);

    return this;

  };

  browser.changeInput = function(selector, value, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector, value) {

      (function(el) {
        function triggerKeyEvent(node, eventType) {
          var keydownEvent = document.createEvent('KeyboardEvent');
          keydownEvent.initEvent(eventType, true, false, null, 0, false, 0, false, 66, 0);
          node.dispatchEvent(keydownEvent);
        }

        if (el) {
          triggerKeyEvent(el, "keydown");
          el.focus();
          el.value = value;
          el.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          el.dispatchEvent(new Event('input', {
            bubbles: true
          }));
          triggerKeyEvent(el, "keyup");
          triggerKeyEvent(el, "keypress");
        }
      })(document.querySelector(selector), value);

    }, [selector, value], function(result) {});

    return this;
  };

  browser.inputValueAssert = function(selector, value, description, timeout) {

    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);

    var attempts = parseInt((timeout || TIMEOUT) / 1000);
    var currentAttempt = 0;

    function checkforValue(selector, value) {
      browser.execute(function(selector) {
        var el = document.querySelector(selector);
        if (el) {
          if (el.type === 'checkbox' || el.type === 'radio') {
            return el.checked ? "true" : "false";
          } else {
            return el.value;
          }
        } else return null;
      }, [selector], function(result) {
        if (value instanceof RegExp ? value.test(result.value) : value === result.value) {
          this.assert.ok(true, description)
        } else if (currentAttempt === attempts) {
          this.assert.ok(false, description)
        } else {
          currentAttempt++;
          browser.pause(1000);
          checkforValue(selector, value);
        }
      });
    }

    checkforValue(selector, value);

    return this;

  };

  browser.elementPresent = function(selector, description, onFail, timeout) {

    browser.perform(() => comment(description));

    var attempts = parseInt((timeout || TIMEOUT) / 1000);
    var currentAttempt = 0;

    function checkforEl(selector) {
      browser.execute(function(selector) {
        return !!document.querySelector(selector);
      }, [selector], function(result) {
        if (!result.value && currentAttempt < attempts) {
          currentAttempt++;
          browser.pause(1000);
          checkforEl(selector);
        } else if (!result.value) {
          if (typeof onFail === "function") {
            onFail();
          } else {
            this.assert.ok(false, description);
          }
        }
      });
    }

    checkforEl(selector);

    return this;

  };

  browser.elementNotPresent = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.waitForElementNotPresent(selector, timeout || TIMEOUT);
    return this;
  };

  browser.focusOnEl = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);

    browser.execute(function(selector) {
      (function(el) {
        var event = new FocusEvent('focus');
        el.dispatchEvent(event);
      })(document.querySelector(selector));
    }, [selector]);

    return this;
  };

  browser.formSubmit = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector) {

      (function(el) {
        var event = new Event('submit');
        el.dispatchEvent(event);
      })(document.querySelector(selector));

    }, [selector]);

    return this;
  };

  browser.blurOffEl = function(selector, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    browser.execute(function(selector) {

      (function(el) {
        var event = new FocusEvent('blur');
        el.dispatchEvent(event);
      })(document.querySelector(selector));

    }, [selector]);

    return this;
  };

  browser.getElText = function(selector, onSuccess, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);

    var attempts = parseInt(TIMEOUT / 1000);
    var currentAttempt = 0;

    function checkforText(selector) {
      browser.execute(function(selector) {
        return (function(element) {
          if (!element) return null;
          var text = "";
          for (var i = 0; i < element.childNodes.length; ++i)
            if (element.childNodes[i].nodeType === 3)
              if (element.childNodes[i].textContent)
                text += element.childNodes[i].textContent;
          text = text.replace(/(\r\n|\n|\r)/gm, "");
          return text.trim();
        })(document.querySelector(selector));
      }, [selector], function(result) {
        if (result.value === "" && currentAttempt < attempts) {
          if (currentAttempt < attempts) {
            currentAttempt++;
            browser.pause(1000);
            checkforText(selector);
          } else {
            this.assert.ok(false, description);
          }
        } else {
          if (typeof onSuccess === "function") onSuccess.call(browser, result.value);
        }
      });
    }

    checkforText(selector);

    return this;

  };

  browser.elTextRegex = function(selector, regex, description, timeout) {
    browser.perform(() => comment(description));
    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);
    return browser.getElText(selector, function(elsText) {
      var assertRegEx = new RegExp(regex);
      if (!assertRegEx.test(elsText)) {
        this.assert.ok(false, description);
      }
    })
  };

  browser.elTextIs = function(selector, assertText, description, timeout) {

    browser.elementPresent(selector, null, () => {
      browser.assert.ok(false, description)
    }, timeout);

    var attempts = parseInt((timeout || TIMEOUT) / 1000);
    var currentAttempt = 0;

    function checkforText(selector, assertText) {
      browser.getElText(selector, function(elsText) {
        if (assertText instanceof RegExp ? assertText.test(elsText) : assertText === elsText) {
          this.assert.ok(true, description)
        } else if (currentAttempt === attempts) {
          this.assert.ok(false, description)
        } else {
          currentAttempt++;
          browser.pause(1000);
          checkforText(selector, assertText);
        }
      });
    }

    checkforText(selector, assertText);

    return this;

  };

  function comment(description) {
    if (description) {
      console.log(description);
    }
  }

};
