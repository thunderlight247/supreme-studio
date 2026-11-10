// Mock data layer. Replace the exports with Supabase REST calls later —
// the UI only consumes these shapes, so layouts don't need restructuring.
// NOTE: times below are PLACEHOLDERS (07:00–22:00 window). Confirm with the ministry.
// Ghana runs on GMT/UTC all year, so all calculations use UTC.

export const SERVICE_DAYS = [
  { key: "tuesday", label: "Tuesday", dayIndex: 2 },
  { key: "thursday", label: "Thursday", dayIndex: 4 },
  { key: "saturday", label: "Saturday", dayIndex: 6 },
];

const day = (d, prefix, evening) => [
  { id: `${prefix}-0700`, day: d.key, dayIndex: d.dayIndex, start: "07:00", end: "09:00", title: "Morning Prayer Altar", period: "morning", kind: "prayer" },
  { id: `${prefix}-1000`, day: d.key, dayIndex: d.dayIndex, start: "10:00", end: "13:00", title: "Counseling Hours", period: "morning", kind: "counseling" },
  { id: `${prefix}-1800`, day: d.key, dayIndex: d.dayIndex, start: "18:00", end: "22:00", title: evening, period: "evening", kind: "deliverance" },
];

export const mockSchedules = [
  ...day(SERVICE_DAYS[0], "tue", "Prophetic Deliverance Night"),
  ...day(SERVICE_DAYS[1], "thu", "Deliverance Night"),
  ...day(SERVICE_DAYS[2], "sat", "Deliverance & Breakthrough"),
];

export const TIME_SLOTS = [
  { key: "morning", label: "Morning", range: "07:00 – 12:00" },
  { key: "evening", label: "Evening", range: "17:00 – 22:00" },
];

export const PRAYER_CATEGORIES = [
  "Prophetic prayer",
  "Counseling",
  "Deliverance",
  "Marriage & family",
  "Health & healing",
  "Other",
];

const toUtc = (base, offset, hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate() + offset, h, m);
};

/** Next (or currently running) session of a given kind. Returns null if none. */
export function getNextSession(nowMs, schedules = mockSchedules, kind = "deliverance") {
  const base = new Date(nowMs);
  for (let offset = 0; offset <= 7; offset++) {
    const dow = new Date(toUtc(base, offset, "00:00")).getUTCDay();
    const slots = schedules
      .filter((s) => s.kind === kind && s.dayIndex === dow)
      .sort((a, b) => a.start.localeCompare(b.start));
    for (const s of slots) {
      const startsAt = toUtc(base, offset, s.start);
      const endsAt = toUtc(base, offset, s.end);
      if (endsAt > nowMs) return { session: s, startsAt, endsAt, live: startsAt <= nowMs };
    }
  }
  return null;
}
