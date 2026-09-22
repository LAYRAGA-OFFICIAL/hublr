/* ============================================
   HUBLR - Calculator Module
   ============================================ */

const Calculator = {
    tryEvaluate(expr) {
        if (!/^[\d\s+\-*/().,%]+$/.test(expr)) return null;
        try {
            const sanitized = expr.replace(/,/g, '.').replace(/%/g, '/100');
            const result = Function('"use strict"; return (' + sanitized + ')')();
            if (typeof result === 'number' && isFinite(result)) {
                return Math.round(result * 1e10) / 1e10;
            }
        } catch (e) {
            return null;
        }
        return null;
    },

    update(input) {
        if (!input.trim()) {
            ELS.calcResult.classList.remove('active');
            return;
        }
        const result = this.tryEvaluate(input);
        if (result !== null) {
            ELS.calcResult.textContent = '= ' + result;
            ELS.calcResult.classList.add('active');
        } else {
            ELS.calcResult.classList.remove('active');
        }
    }
};