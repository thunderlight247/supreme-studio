"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { mockSchedules } from "@/data/mockSchedules";

const STORAGE_KEY = "supreme-studios:appointments:v1";
const Ctx = createContext(null);

// Simulated server latency. Swap the bodies of addAppointment/cancelAppointment
// for Supabase REST calls later; consumers keep the same async signatures.
const fakeLatency = (ms = 600) => new Promise((r) => setTimeout(r, ms));

export function AppProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAppointments(JSON.parse(raw));
    } catch {
      /* corrupt or blocked storage: start empty */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    } catch {
      /* storage full/blocked: state still works in memory */
    }
  }, [appointments, hydrated]);

  const addAppointment = useCallback(async (data) => {
    await fakeLatency();
    const appt = {
      id: `apt_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      ...data,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setAppointments((prev) => [appt, ...prev]);
    return appt;
  }, []);

  const cancelAppointment = useCallback(async (id) => {
    await fakeLatency(250);
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const value = useMemo(
    () => ({ schedules: mockSchedules, appointments, addAppointment, cancelAppointment, hydrated }),
    [appointments, addAppointment, cancelAppointment, hydrated]
  );

  return (
    <MotionConfig reducedMotion="user">
      <Ctx.Provider value={value}>{children}</Ctx.Provider>
    </MotionConfig>
  );
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp must be used inside <AppProvider>");
  return v;
}
