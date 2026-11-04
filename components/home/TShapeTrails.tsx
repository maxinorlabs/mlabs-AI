'use client';

import { motion, type MotionValue } from 'motion/react';

/** Where the T's parts sit, in pixels from the top-left of its content box (measured on md and up). */
export type TShapeGeometry = {
  width: number;
  height: number;
  /** The spine's x. */
  spineX: number;
  /** The bottom edge of the capability bar. */
  barBottom: number;
  /** Where the three streams join the spine. */
  merge: number;
  /** The x of the Build, Scale and Invest headings, in that order. */
  groups: number[];
  /** Each sector's node: its height on the spine and which side its card is on (-1 left, 1 right). */
  nodes: { y: number; side: -1 | 1 }[];
};

// How far a sector's card stands off the spine (the grid's 48px column gap), and the radius of the turn.
const REACH = 48;
const TURN = 10;

function streamPath(x: number, g: TShapeGeometry) {
  const mid = (g.barBottom + g.merge) / 2;
  return `M ${x} ${g.barBottom} C ${x} ${mid}, ${g.spineX} ${mid}, ${g.spineX} ${g.merge}`;
}

function sectorPath(node: TShapeGeometry['nodes'][number], g: TShapeGeometry) {
  const { spineX: x } = g;
  return `M ${x} ${g.merge} L ${x} ${node.y - TURN} Q ${x} ${node.y} ${x + node.side * TURN} ${node.y} L ${x + node.side * REACH} ${node.y}`;
}

/**
 * The light trails of the T, drawn over its layout: three streams flow from Build, Scale and Invest into the
 * spine, drawn in as the section scrolls into view. Hovering a sector lights its route. Desktop only; on
 * phones the plain spine stands alone.
 */
export function TShapeTrails({
  geometry: g,
  draw,
  activeSector,
  capActive,
}: {
  geometry: TShapeGeometry;
  /** 0 to 1: how much of the three streams has been drawn, scrubbed by scroll. */
  draw: MotionValue<number>;
  activeSector: number | null;
  capActive: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      width={g.width}
      height={g.height}
      viewBox={`0 0 ${g.width} ${g.height}`}
      className="pointer-events-none absolute left-0 top-0 hidden overflow-visible md:block"
    >
      <defs>
        {/* Streams start quiet under the bar and warm to orange as they reach the spine */}
        <linearGradient id="tshape-stream" gradientUnits="userSpaceOnUse" x1="0" y1={g.barBottom} x2="0" y2={g.merge}>
          <stop offset="0" stopColor="var(--color-navy)" stopOpacity="0.14" />
          <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* The three streams: a soft glow under a fine line */}
      {g.groups.map((x, i) => (
        <g key={i}>
          <motion.path
            d={streamPath(x, g)}
            fill="none"
            stroke="var(--color-brand)"
            strokeOpacity={capActive ? 0.22 : 0.1}
            strokeWidth={8}
            strokeLinecap="round"
            style={{ pathLength: draw }}
            className="blur-[3px] transition-[stroke-opacity] duration-500"
          />
          <motion.path
            d={streamPath(x, g)}
            fill="none"
            stroke="url(#tshape-stream)"
            strokeWidth={1.5}
            strokeLinecap="round"
            style={{ pathLength: draw }}
          />
        </g>
      ))}

      {/* The hovered sector's whole route, held lit */}
      {activeSector !== null && g.nodes[activeSector] && (
        <path
          d={sectorPath(g.nodes[activeSector], g)}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={2}
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(243,111,33,0.7)]"
        />
      )}
    </svg>
  );
}

/**
 * Faint trails of light sweeping across the paper behind the T, filling the margins beside the sectors.
 * Purely decorative and still.
 */
export function LightTrails() {
  const trails = [
    { d: 'M -80 520 C 220 470, 360 300, 620 330 S 1040 520, 1520 300', w: 1.5, o: 0.5 },
    { d: 'M -80 560 C 260 520, 420 360, 680 380 S 1080 560, 1520 360', w: 1, o: 0.35 },
    { d: 'M -80 600 C 300 570, 480 420, 740 430 S 1120 600, 1520 420', w: 1, o: 0.22 },
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[75%] w-full md:block"
    >
      <defs>
        <linearGradient id="light-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-brand)" stopOpacity="0" />
          <stop offset="0.3" stopColor="var(--color-brand)" stopOpacity="1" />
          <stop offset="0.7" stopColor="#FFB547" stopOpacity="1" />
          <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
        </linearGradient>
      </defs>
      {trails.map((t, i) => (
        <g key={i} opacity={t.o}>
          <path d={t.d} fill="none" stroke="url(#light-trail)" strokeWidth={10} strokeOpacity={0.12} className="blur-[6px]" />
          <path d={t.d} fill="none" stroke="url(#light-trail)" strokeWidth={t.w} />
        </g>
      ))}
    </svg>
  );
}
