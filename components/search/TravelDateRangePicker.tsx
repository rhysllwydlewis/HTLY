'use client';

import { useEffect, useId, useState } from 'react';
import { Icon } from '@/components/Icon';

type TravelDateRangePickerProps = {
  checkInName?: string;
  checkOutName?: string;
  defaultCheckIn?: string;
  defaultCheckOut?: string;
  compact?: boolean;
};

function addDays(base: Date, days: number) {
  const next = new Date(base);
  next.setDate(next.getDate() + days);
  return next;
}

function toDateInputValue(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(value: string) {
  if (!value) return 'Choose date';
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return 'Choose date';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}

export function TravelDateRangePicker({
  checkInName = 'checkIn',
  checkOutName = 'checkOut',
  defaultCheckIn = '',
  defaultCheckOut = '',
  compact = false
}: TravelDateRangePickerProps) {
  const id = useId();
  const [min, setMin] = useState('');
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const nights = checkIn && checkOut ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)) : 0;

  useEffect(() => {
    setMin(toDateInputValue(new Date()));
  }, []);

  function chooseQuickRange(offsetDays: number, length: number) {
    const start = addDays(new Date(), offsetDays);
    setCheckIn(toDateInputValue(start));
    setCheckOut(toDateInputValue(addDays(start, length)));
  }

  function updateCheckIn(value: string) {
    setCheckIn(value);

    if (value && checkOut && value >= checkOut) {
      setCheckOut(toDateInputValue(addDays(new Date(`${value}T12:00:00Z`), 7)));
    }
  }

  return (
    <fieldset className={`date-range-picker ${compact ? 'is-compact' : ''}`}>
      <legend><Icon name="calendar" />Travel dates</legend>
      <div className="date-range-grid">
        <label htmlFor={`${id}-check-in`}>
          <span>Check-in</span>
          <input id={`${id}-check-in`} name={checkInName} type="date" min={min} value={checkIn} onChange={(event) => updateCheckIn(event.target.value)} aria-label="Check-in date" />
        </label>
        <label htmlFor={`${id}-check-out`}>
          <span>Check-out</span>
          <input id={`${id}-check-out`} name={checkOutName} type="date" min={checkIn || min} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} aria-label="Check-out date" />
        </label>
      </div>
      <div className="date-range-summary" aria-live="polite">
        <span>{checkIn ? formatDate(checkIn) : 'Flexible start'}</span>
        <strong>{nights > 0 ? `${nights} nights` : 'Pick a range'}</strong>
        <span>{checkOut ? formatDate(checkOut) : 'Flexible return'}</span>
      </div>
      <div className="quick-date-row" aria-label="Quick date ranges">
        <button type="button" onClick={() => chooseQuickRange(14, 7)}>2 weeks · 7 nights</button>
        <button type="button" onClick={() => chooseQuickRange(45, 10)}>45 days · 10 nights</button>
      </div>
    </fieldset>
  );
}
