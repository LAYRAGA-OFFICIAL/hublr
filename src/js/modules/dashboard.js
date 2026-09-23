/* ============================================
   HUBLR - Dashboard Layout Module
   Toggle panel dashboard
   ============================================ */

const Dashboard = {
    init() {
        on($('#dashboardToggle'), 'click', () => this.toggle());
    },

    toggle() {
        const dash = $('#dashboard');
        if (dash) {
            dash.classList.toggle('hidden');
        }
    }
};