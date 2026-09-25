/* ============================================
   HUBLR - Animations Module v0.3.0
   Particle canvas + cursor trail
   ============================================ */

const Animations = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    trail: [],
    trailActive: false,
    enabled: false,
    cursorTrail: false,

    init() {
        this.enabled = Storage.get('anim_particles', false);
        this.cursorTrail = Storage.get('anim_cursor', false);

        if (this.enabled) this.startParticles();
        if (this.cursorTrail) this.startCursorTrail();

        on($('#particleToggle'), 'change', (e) => {
            this.enabled = e.target.checked;
            Storage.set('anim_particles', this.enabled);
            this.enabled ? this.startParticles() : this.stopParticles();
        });

        on($('#cursorToggle'), 'change', (e) => {
            this.cursorTrail = e.target.checked;
            Storage.set('anim_cursor', this.cursorTrail);
            this.cursorTrail ? this.startCursorTrail() : this.stopCursorTrail();
        });

        on($('#particleType'), 'change', (e) => {
            Storage.set('anim_particle_type', e.target.value);
            if (this.enabled) {
                this.stopParticles();
                this.startParticles();
            }
        });
    },

    startParticles() {
        if (this.canvas) return;
        try {
            const canvas = document.createElement('canvas');
            canvas.id = 'particleCanvas';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
            document.body.appendChild(canvas);
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.resize();
            window.addEventListener('resize', () => this.resize());

            const type = Storage.get('anim_particle_type', 'stars');
            const count = type === 'stars' ? 80 : 60;

            for (let i = 0; i < count; i++) {
                this.particles.push(this.createParticle(type));
            }

            this.animate();
        } catch (e) {
            console.warn('Particle error:', e);
        }
    },

    stopParticles() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        if (this.canvas) { this.canvas.remove(); this.canvas = null; this.ctx = null; }
        this.particles = [];
        this.animationId = null;
    },

    createParticle(type) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const p = {
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2 + 1,
            speedY: Math.random() * 0.5 + 0.2,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.3,
            type: type,
            color: 'rgba(255,255,255,0.8)'
        };
        if (type === 'snow') {
            p.size = Math.random() * 3 + 1;
            p.speedY = Math.random() * 1 + 0.5;
            p.speedX = (Math.random() - 0.5) * 0.5;
        } else if (type === 'rain') {
            p.size = Math.random() * 1.5 + 0.5;
            p.speedY = Math.random() * 8 + 6;
            p.speedX = -1;
            p.color = 'rgba(174, 194, 224, 0.7)';
        } else if (type === 'stars') {
            p.size = Math.random() * 1.5 + 0.5;
            p.speedY = Math.random() * 0.1;
            p.speedX = 0;
        } else if (type === 'bubbles') {
            p.size = Math.random() * 15 + 5;
            p.speedY = -(Math.random() * 0.5 + 0.2);
            p.speedX = (Math.random() - 0.5) * 0.3;
            p.color = 'rgba(99, 102, 241, 0.3)';
        }
        return p;
    },

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    animate() {
        if (!this.ctx || !this.canvas) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.ctx.clearRect(0, 0, w, h);
        this.particles.forEach((p) => {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
            else if (p.y < -10) { p.y = h + 10; }
            if (p.x > w + 10) p.x = -10;
            else if (p.x < -10) p.x = w + 10;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color || `rgba(255,255,255,${p.opacity})`;
            this.ctx.fill();
        });
        this.animationId = requestAnimationFrame(() => this.animate());
    },

    startCursorTrail() {
        if (this.trailActive) return;
        this.trailActive = true;
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);
        this.animateTrail();
    },

    stopCursorTrail() {
        this.trailActive = false;
        if (this.onMouseMove) document.removeEventListener('mousemove', this.onMouseMove);
        this.trail = [];
        const old = $('#cursorTrail');
        if (old) old.remove();
    },

    onMouseMove(e) {
        this.trail.push({ x: e.clientX, y: e.clientY, age: 0 });
        if (this.trail.length > 20) this.trail.shift();
    },

    animateTrail() {
        if (!this.trailActive) return;
        let canvas = $('#cursorTrail');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'cursorTrail';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
            document.body.appendChild(canvas);
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.trail.forEach((t) => {
            t.age++;
            const opacity = Math.max(0, 1 - t.age / 30);
            const size = Math.max(0, 8 - t.age / 4);
            ctx.beginPath();
            ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.fill();
        });
        this.trail = this.trail.filter((t) => t.age < 30);
        requestAnimationFrame(() => this.animateTrail());
    }
};