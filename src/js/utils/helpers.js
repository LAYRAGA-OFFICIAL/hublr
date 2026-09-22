/* ============================================
   HUBLR - Helper Functions
   ============================================ */

const Helpers = {
    pad(n) {
        return String(n).padStart(2, '0');
    },

    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    isValidUrl(str) {
        return /^https?:\/\//.test(str);
    },

    normaliseUrl(url) {
        return Helpers.isValidUrl(url) ? url : 'https://' + url;
    }
};