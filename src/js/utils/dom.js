/* ============================================
   HUBLR - DOM Helpers v0.3.2
   ============================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const on = (el, event, handler) => {
    if (el) el.addEventListener(event, handler);
};

const show = (el) => el && el.classList.remove('hidden');
const hide = (el) => el && el.classList.add('hidden');

const ELS = {
    // Clock
    clock: $('#clock'),
    date: $('#date'),
    greeting: $('#greeting'),

    // Search
    searchInput: $('#searchInput'),
    searchBtn: $('#searchBtn'),
    engineSelect: $('#engineSelect'),
    calcResult: $('#calcResult'),
    suggestions: $('#suggestions'),

    // Bookmarks
    bookmarksGrid: $('#bookmarksGrid'),
    bookmarksTitle: $('#bookmarksTitle'),
    addBookmarkBtn: $('#addBookmarkBtn'),
    bookmarkModal: $('#bookmarkModal'),
    modalTitle: $('#modalTitle'),
    bmName: $('#bmName'),
    bmUrl: $('#bmUrl'),
    bmCancel: $('#bmCancel'),
    bmSave: $('#bmSave'),

    // Settings
    settingsBtn: $('#settingsBtn'),
    settingsModal: $('#settingsModal'),
    settingsTitle: $('#settingsTitle'),
    settingsClose: $('#settingsClose'),
    wallpaperToggle: $('#wallpaperToggle'),
    animationToggle: $('#animationToggle'),
    clockFormat: $('#clockFormat'),
    lblWallpaper: $('#lblWallpaper'),
    lblAnim: $('#lblAnim'),
    lblClock: $('#lblClock'),

    // Topbar
    themeToggle: $('#themeToggle'),
    themeIcon: $('#themeIcon'),
    langToggle: $('#langToggle'),
    langLabel: $('#langLabel'),
    footerText: $('#footerText'),

    // Wallpaper
    wallpaper: $('#wallpaper'),

    // Dashboard (v0.2.0)
    dashboard: $('#dashboard'),
    dashboardToggle: $('#dashboardToggle'),
    notesGrid: $('#notesGrid'),
    addNoteBtn: $('#addNoteBtn'),
    notesTitle: $('#notesTitle'),
    todoInput: $('#todoInput'),
    todoList: $('#todoList'),
    todoTitle: $('#todoTitle'),
    weatherContent: $('#weatherContent'),
    weatherRefresh: $('#weatherRefresh'),
    weatherTitle: $('#weatherTitle'),
    backupTitle: $('#backupTitle'),
    backupDesc: $('#backupDesc'),
    exportBtn: $('#exportBtn'),
    importBtn: $('#importBtn'),
    importFile: $('#importFile'),

    // v0.3.0
    voiceBtn: $('#voiceBtn'),
    searchPreview: $('#searchPreview'),
    wallpaperType: $('#wallpaperType'),
    wallpaperUpload: $('#wallpaperUpload'),
    wallpaperUploadVideo: $('#wallpaperUploadVideo'),
    wallpaperUrlInput: $('#wallpaperUrlInput'),
    wallpaperApplyUrl: $('#wallpaperApplyUrl'),
    wallpaperGradientApply: $('#wallpaperGradientApply'),
    wallpaperSolidApply: $('#wallpaperSolidApply'),
    wallpaperReset: $('#wallpaperReset'),
    gradientColor1: $('#gradientColor1'),
    gradientColor2: $('#gradientColor2'),
    gradientAngle: $('#gradientAngle'),
    solidColor: $('#solidColor'),
    particleToggle: $('#particleToggle'),
    particleType: $('#particleType'),
    cursorToggle: $('#cursorToggle'),
    wallpaperPreview: $('#wallpaperPreview'),
    lblColorTitle: $('#lblColorTitle'),
    lblWallpaperTitle: $('#lblWallpaperTitle'),
    lblWallpaperType: $('#lblWallpaperType'),
    lblAnimTitle: $('#lblAnimTitle'),
    lblParticles: $('#lblParticles'),
    lblCursor: $('#lblCursor'),
    lblOtherTitle: $('#lblOtherTitle'),

    // v0.3.2
    enginePickerBtn: $('#enginePickerBtn'),
    enginePickerIcon: $('#enginePickerIcon'),
    engineDropdown: $('#engineDropdown'),
    engineDropdownList: $('#engineDropdownList'),
    engineDropdownClose: $('#engineDropdownClose')
};