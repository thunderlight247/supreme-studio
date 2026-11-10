"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";

export const STREAM_URL = "https://stream.zeno.fm/mefyivt0hrruv";
export const TOGGLE_EVENT = "supreme:toggle-stream";

const BARS = 24;
const W = 84;
const H = 26;
const LABELS = {
  idle: "24/7 Prophetic Stream · Tap to listen",
  buffering: "Connecting to Ghana stream…",
  live: "Live Sanctuary Broadcast · On Air",
  error: "Stream momentarily offline · Tap to retry",
};

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const statusRef = useRef("idle");
  const [status, setStatus] = useState("idle");
  const [volume, setVolume] = useState(0.85);
  const [muted, setMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const update = useCallback((s) => {
    statusRef.current = s;
    setStatus(s);
  }, []);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.removeAttribute("src");
    a.load();
    update("idle");
  }, [update]);

  const start = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;
    update("buffering");
    a.src = STREAM_URL;
    try {
      await a.play();
    } catch (e) {
      if (e?.name === "AbortError") return;
      update("error");
    }
  }, [update]);

  const toggle = useCallback(() => {
    const s = statusRef.current;
    if (s === "idle" || s === "error") start();
    else stop();
  }, [start, stop]);

  useEffect(() => {
    const handler = () => toggle();
    window.addEventListener(TOGGLE_EVENT, handler);
    return () => window.removeEventListener(TOGGLE_EVENT, handler);
  }, [toggle]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  // Equalizer canvas with Sunbeam Yellow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const levels = Array(BARS).fill(0.1);
    let raf = 0;
    let t = 0;

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, W, H);
      const bw = W / BARS;
      for (let i = 0; i < BARS; i++) {
        let target = 0.12;
        if (!reduce) {
          if (status === "live") {
            target = 0.2 + 0.8 * Math.abs(Math.sin(t * 0.08 + i * 0.85) * Math.cos(t * 0.035 + i * 0.4));
          } else if (status === "buffering") {
            target = 0.25 + 0.2 * Math.sin(t * 0.18 + i * 0.5);
          }
        } else if (status === "live") {
          target = 0.6;
        }
        levels[i] += (target - levels[i]) * 0.22;
        const h = Math.max(3, levels[i] * H);

        const grad = ctx.createLinearGradient(0, H - h, 0, H);
        if (status === "error") {
          grad.addColorStop(0, "#9ca3af");
          grad.addColorStop(1, "#6b7280");
        } else {
          grad.addColorStop(0, "#fbbf24");
          grad.addColorStop(1, "#d97706");
        }
        ctx.fillStyle = grad;
        ctx.fillRect(i * bw + 1, H - h, bw - 2, h);
      }
      if ((status === "live" || status === "buffering") && !reduce) {
        raf = requestAnimationFrame(draw);
      }
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [status]);

  const playing = status === "live" || status === "buffering";

  return (
    <div
      aria-label="Sanctuary live stream player"
      className="fixed bottom-4 left-4 z-40 transition-all duration-300 sm:left-6"
    >
      <audio
        ref={audioRef}
        preload="none"
        onPlaying={() => update("live")}
        onWaiting={() => audioRef.current?.getAttribute("src") && update("buffering")}
        onStalled={() => audioRef.current?.getAttribute("src") && update("buffering")}
        onError={() => audioRef.current?.getAttribute("src") && update("error")}
      />

      <div className="relative overflow-hidden rounded-2xl border border-forest-line bg-white/95 p-3 text-forest-950 shadow-lg backdrop-blur-xl sm:p-3.5">
        <div className="flex items-center gap-3">
          {/* Main Play/Pause Button */}
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? "Pause sanctuary stream" : "Listen to sanctuary live stream"}
            className="group relative grid size-11 shrink-0 place-items-center rounded-xl bg-sunbeam-400 text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300 hover:scale-105 active:scale-95"
          >
            {playing ? (
              <Pause className="size-5 fill-current" />
            ) : (
              <Play className="size-5 translate-x-0.5 fill-current" />
            )}
          </button>

          {/* Info & Title */}
          {!isMinimized && (
            <div className="min-w-0 pr-2">
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-sunbeam-500 animate-pulse" />
                <span className="truncate text-xs font-bold uppercase tracking-wider text-forest-950">
                  Supreme Radio
                </span>
                <span className="hidden rounded bg-sagemist-100 px-1.5 py-0.2 text-[10px] font-bold text-forest-800 md:inline">
                  24/7
                </span>
              </div>
              <p
                role="status"
                aria-live="polite"
                className="truncate text-[11px] font-medium text-sagemist-800 sm:max-w-[200px]"
              >
                {LABELS[status]}
              </p>
            </div>
          )}

          {/* Dynamic Audio Visualizer Canvas */}
          {!isMinimized && (
            <canvas
              ref={canvasRef}
              style={{ width: W, height: H }}
              className="hidden shrink-0 rounded sm:block"
              aria-hidden="true"
            />
          )}

          {/* Volume Control */}
          {!isMinimized && (
            <div className="hidden items-center gap-1.5 border-l border-forest-line pl-2 lg:flex">
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? "Unmute" : "Mute"}
                className="grid size-8 place-items-center rounded-lg text-sagemist-700 hover:text-forest-950"
              >
                {muted || volume === 0 ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={muted ? 0 : volume}
                onChange={(e) => {
                  setMuted(false);
                  setVolume(Number(e.target.value));
                }}
                aria-label="Volume"
                className="w-16 accent-sunbeam-500 cursor-pointer"
              />
            </div>
          )}

          {/* Minimize / Expand Toggle */}
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? "Expand player" : "Minimize player"}
            className="grid size-7 place-items-center rounded-lg text-sagemist-700 hover:bg-sagemist-100 hover:text-forest-950"
          >
            {isMinimized ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
