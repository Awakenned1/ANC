// Tolomane Mnyayiza Region — countdown timer (SAST UTC+2)
document.addEventListener('DOMContentLoaded', () => {

    // ── Hamburger nav toggle ──────────────────────
    const navToggle = document.getElementById('navToggle');
    const mainNav   = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close on nav link click (single-page anchor navigation)
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close when clicking outside the header
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.site-header')) {
                mainNav.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }


    const ELECTION = new Date("2026-11-04T07:00:00+02:00").getTime();

    function pad(n, len) { return String(n).padStart(len || 2, '0'); }

    function set(id, val) {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    }

    function tick() {
        const diff = ELECTION - Date.now();
        if (diff <= 0) {
            set('days', '000'); set('hours', '00');
            set('minutes', '00'); set('seconds', '00');
            return;
        }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        set('days',    pad(d, 3));
        set('hours',   pad(h));
        set('minutes', pad(m));
        set('seconds', pad(s));
    }

    tick();
    setInterval(tick, 1000);
});
