/* ============================================
   HUBLR Configuration
   ============================================ */

const CONFIG = {
    brand: {
        name: 'HUBLR',
        fullName: 'LAYRAGA Hub',
        version: '0.2.0',
        author: 'LAYRAGA OFFICIAL',
        repo: 'https://github.com/LAYRAGA-OFFICIAL/hublr'
    },

    engines: [
        { id: 'google', name: 'Google', icon: '🔍', url: 'https://www.google.com/search?q=%s' },
        { id: 'bing', name: 'Bing', icon: '🅱️', url: 'https://www.bing.com/search?q=%s' },
        { id: 'duckduckgo', name: 'DuckDuckGo', icon: '🦆', url: 'https://duckduckgo.com/?q=%s' },
        { id: 'youtube', name: 'YouTube', icon: '▶️', url: 'https://www.youtube.com/results?search_query=%s' },
        { id: 'github', name: 'GitHub', icon: '🐙', url: 'https://github.com/search?q=%s' },
        { id: 'wikipedia', name: 'Wikipedia', icon: '📚', url: 'https://id.wikipedia.org/w/index.php?search=%s' }
    ],

    defaultBookmarks: [
        { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
        { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
        { name: 'Gmail', url: 'https://mail.google.com', icon: '✉️' },
        { name: 'Drive', url: 'https://drive.google.com', icon: '📁' },
        { name: 'WhatsApp', url: 'https://web.whatsapp.com', icon: '💬' },
        { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
    ],

    wallpaper: {
        enabled: true,
        source: 'https://source.unsplash.com/1920x1080/?nature,landscape',
        refreshInterval: 3600000
    },

    settings: {
        defaultTheme: 'dark',
        defaultLanguage: 'id',
        clockFormat: '24',
        animations: true
    }
};