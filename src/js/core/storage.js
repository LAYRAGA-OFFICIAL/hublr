/* ============================================
   HUBLR - Storage Wrapper
   ============================================ */

const Storage = {
    prefix: 'hublr_',

    get(key, fallback = null) {
        try {
            const val = localStorage.getItem(this.prefix + key);
            return val !== null ? JSON.parse(val) : fallback;
        } catch (e) {
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
            return true;
        } catch (e) {
            return false;
        }
    },

    remove(key) {
        localStorage.removeItem(this.prefix + key);
    },

    clear() {
        Object.keys(localStorage)
            .filter((k) => k.startsWith(this.prefix))
            .forEach((k) => localStorage.removeItem(k));
    }
};