$(document).ready(function() {
  localStorage.getItem("cookieNotice")
    ? $("#cookieNotice").remove()
    : unhideCookieNotice();
});

function unhideCookieNotice() {
  $("#cookieNotice").removeAttr("hidden");
  $("#cookieNotice").hide();
  $("#cookieNotice").fadeIn(200);
}

function setCookieAgreement(value = true) {
  localStorage.setItem("cookieNotice", false);
  localStorage.setItem("acceptedCookies", value);
  $("#cookieNotice").fadeOut(200);
  setTimeout(() => {
    $("#cookieNotice").remove();
  }, 200);
}

function cookiesAllowed() {
  return 1 == localStorage.getItem("acceptedCookies") ? !0 : !1;
}

function setCookie(name, value, needed) {
  checkCookiesAllowed()
    ? localStorage.setItem(name, value)
    : needed
    ? localStorage.setItem(name, value)
    : null;
}

function removeCookie(name) {
  localStorage.removeItem(name);
}

function clearCookies() {
  localStorage.clear();
}
