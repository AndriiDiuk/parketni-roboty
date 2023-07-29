(function () { const n = document.createElement("link").relList; if (n && n.supports && n.supports("modulepreload")) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e); new MutationObserver(e => { for (const t of e) if (t.type === "childList") for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && c(s) }).observe(document, { childList: !0, subtree: !0 }); function i(e) { const t = {}; return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t } function c(e) { if (e.ep) return; e.ep = !0; const t = i(e); fetch(e.href, t) } })(); const l = () => { gsap.from(".header__title", 1.2, { opacity: 0, x: -100, delay: .1 }), gsap.from(".header__title-price", 1.5, { opacity: 0, x: -80, delay: .002 }), gsap.from(".phone-number", 1.2, { opacity: 0, x: 20, delay: .02 }), gsap.from(".header__logo-link", 1.2, { opacity: 0, x: -20, delay: .02 }), gsap.from(".burger", 1.2, { opacity: 0, x: 20, delay: .02 }) }; l(); const a = { btnBurger: document.querySelector(".burger"), btnCloseBurger: document.querySelector(".nav-header__close-burger"), navMobile: document.querySelector(".nav-header"), navLinks: document.querySelectorAll(".nav-header__item") }, { btnBurger: d, navMobile: r, btnCloseBurger: u, navLinks: m } = a; d.addEventListener("click", () => { r.classList.add("open-menu"), document.documentElement.style.cssText = "overflow:hidden" }); u.addEventListener("click", () => { r.classList.remove("open-menu"), document.documentElement.style.cssText = "" }); Array.from(m).map(o => { o.addEventListener("click", () => { r.classList.remove("open-menu"), document.documentElement.style.cssText = "" }) }); r.addEventListener("click", o => { o.target.classList.contains("open-menu") && (r.classList.remove("open-menu"), document.documentElement.style.cssText = "") });
