/* ============================================
   HUBLR - DOM Helpers
   ============================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const on = (el, event, handler) => {
    if (el) el.addEventListener(event, handler);
};

const show = (el) => el && el.classList.remove('hidden');
const hide = (el) => el && el.classList.add('hidden');

const ELS = {
    clock: $('#clock'),
    date: $('#date'),
    greeting: $('#greeting'),
    searchInput: $('#searchInput'),
    searchBtn: $('#searchBtn'),
    engineSelect: $('#engineSelect'),
    calcResult: $('#calcResult'),
    bookmarksGrid: $('#bookmarksGrid'),
    bookmarksTitle: $('#bookmarksTitle'),
    addBookmarkBtn: $('#addBookmarkBtn'),
    bookmarkModal: $('#bookmarkModal'),
    modalTitle: $('#modalTitle'),
    bmName: $('#bmName'),
    bmUrl: $('#bmUrl'),
    bmCancel: $('#bmCancel'),
    bmSave: $('#bmSave'),
    settingsBtn: $('#settingsBtn'),
    settingsModal: $('#settingsModal'),
    settingsTitle: $('#settingsTitle'),
    settingsClose: $('#settingsClose'),
    wallpaperToggle: $('#wallpaperToggle'),
    animationToggle: $('#animationToggle'),
    clockFormat: $('#clockFormat'),
    themeToggle: $('#themeToggle'),
    themeIcon: $('#themeIcon'),
    langToggle: $('#langToggle'),
    langLabel: $('#langLabel'),
    footerText: $('#footerText'),
    wallpaper: $('#wallpaper'),
    lblWallpaper: $('#lblWallpaper'),
    lblAnim: $('#lblAnim'),
    lblClock: $('#lblClock')
};