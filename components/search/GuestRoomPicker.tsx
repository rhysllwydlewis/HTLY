'use client';

import { useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';
import { formatGuestRoomLabel, type GuestRoomState } from '@/lib/search-state';

type GuestRoomPickerProps = {
  adults?: number;
  childCount?: number;
  rooms?: number;
  compact?: boolean;
};

const limits = {
  adults: { min: 1, max: 9 },
  children: { min: 0, max: 8 },
  rooms: { min: 1, max: 5 }
};

export function GuestRoomPicker({ adults = 2, childCount = 0, rooms = 1, compact = false }: GuestRoomPickerProps) {
  const [state, setState] = useState<GuestRoomState>({ adults, children: childCount, rooms });
  const label = useMemo(() => formatGuestRoomLabel(state), [state]);

  function update(key: keyof GuestRoomState, direction: 1 | -1) {
    setState((current) => {
      const next = Math.min(limits[key].max, Math.max(limits[key].min, current[key] + direction));
      return { ...current, [key]: next };
    });
  }

  return (
    <div className={`guest-room-picker ${compact ? 'is-compact' : ''}`}>
      <div className="guest-picker-head">
        <span className="control-label"><Icon name="guests" />Guests & rooms</span>
        <strong aria-live="polite">{label}</strong>
      </div>
      <input type="hidden" name="guests" value={state.adults + state.children} />
      <input type="hidden" name="adults" value={state.adults} />
      <input type="hidden" name="children" value={state.children} />
      <input type="hidden" name="rooms" value={state.rooms} />
      <div className="guest-stepper-grid">
        {([
          ['adults', 'Adults', 'Aged 16+'],
          ['children', 'Children', 'Aged 0–15'],
          ['rooms', 'Rooms', 'Bedrooms needed']
        ] as const).map(([key, title, help]) => (
          <div className="guest-stepper" key={key}>
            <span><strong>{title}</strong><small>{help}</small></span>
            <div>
              <button type="button" onClick={() => update(key, -1)} disabled={state[key] <= limits[key].min} aria-label={`Reduce ${title.toLowerCase()}`}>−</button>
              <output aria-label={title}>{state[key]}</output>
              <button type="button" onClick={() => update(key, 1)} disabled={state[key] >= limits[key].max} aria-label={`Increase ${title.toLowerCase()}`}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
