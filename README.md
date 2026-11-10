# Supreme Studios

Next.js (App Router) + Tailwind v4 + GSAP/Lenis + Framer Motion.

```bash
npm install
npm run dev
```

- `src/data/mockSchedules.js` – placeholder service times (confirm with the ministry).
- `src/context/AppContext.jsx` – appointments in `localStorage`; swap `addAppointment` / `cancelAppointment` for Supabase REST calls later.
- `src/components/` – `AudioPlayer`, `BookingForm`, `CountdownTimer` + supporting UI.
- `src/views/Home.jsx` – the page (not `src/pages`, which Next.js would treat as routes).
- React Bits components are added individually (`reactbits.dev`) — none are installed yet.
