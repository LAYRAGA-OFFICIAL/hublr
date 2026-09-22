/* ============================================
   HUBLR - Clock Module
   ============================================ */

const Clock = {
    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    },

    update() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = Helpers.pad(now.getMinutes());

        let timeStr;
        if (State.clockFormat === '12') {
            const h12 = hours % 12 || 12;
            const ampm = hours < 12 ? 'AM' : 'PM';
            timeStr = `${h12}:${minutes} ${ampm}`;
        } else {
            timeStr = `${Helpers.pad(hours)}:${minutes}`;
        }
        ELS.clock.textContent = timeStr;

        const dayName = I18n.t('days')[now.getDay()];
        const day = now.getDate();
        const month = I18n.t('months')[now.getMonth()];
        const year = now.getFullYear();
        ELS.date.textContent = `${dayName}, ${day} ${month} ${year}`;

        let greeting;
        if (hours < 12) greeting = I18n.t('greetingMorning');
        else if (hours < 15) greeting = I18n.t('greetingAfternoon');
        else if (hours < 18) greeting = I18n.t('greetingEvening');
        else greeting = I18n.t('greetingNight');
        ELS.greeting.textContent = greeting + ' 👋';
    }
};