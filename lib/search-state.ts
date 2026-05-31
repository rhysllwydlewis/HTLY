export type GuestRoomState = {
  adults: number;
  children: number;
  rooms: number;
};

export type HolidaySearchState = GuestRoomState & {
  destination: string;
  checkIn: string;
  checkOut: string;
  style: string;
  board: string;
  maxBudget: string;
  sort: string;
  month: string;
  budget: string;
};

type SearchParamsInput = Record<string, string | string[] | undefined> | URLSearchParams | undefined;

const defaultGuests: GuestRoomState = {
  adults: 2,
  children: 0,
  rooms: 1
};

export const defaultHolidaySearchState: HolidaySearchState = {
  destination: '',
  checkIn: '',
  checkOut: '',
  style: '',
  board: 'Any',
  maxBudget: '',
  sort: 'recommended',
  month: '',
  budget: '',
  ...defaultGuests
};

export function readSearchParam(params: SearchParamsInput, key: string) {
  if (!params) return '';

  if (params instanceof URLSearchParams) {
    return params.get(key) ?? '';
  }

  const value = params[key];
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

function readFirstParam(params: SearchParamsInput, keys: string[]) {
  for (const key of keys) {
    const value = readSearchParam(params, key).trim();
    if (value) return value;
  }

  return '';
}

function parsePositiveInt(value: string, fallback: number) {
  const parsed = Number.parseInt(value.replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseChildren(value: string) {
  const parsed = Number.parseInt(value.replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}


function normaliseDateParam(value: string) {
  if (!value) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  const parsed = new Date(`${value} 12:00:00 GMT`);
  return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString().slice(0, 10);
}

function parseLegacyGuests(value: string): Partial<GuestRoomState> {
  if (!value) return {};
  const lower = value.toLowerCase();
  const adultsMatch = lower.match(/(\d+)\s*adult/);
  const childrenMatch = lower.match(/(\d+)\s*(child|children)/);
  const roomsMatch = lower.match(/(\d+)\s*room/);
  const generic = lower.match(/^(\d+)$/);

  return {
    adults: adultsMatch ? parsePositiveInt(adultsMatch[1], defaultGuests.adults) : generic ? parsePositiveInt(generic[1], defaultGuests.adults) : undefined,
    children: childrenMatch ? parseChildren(childrenMatch[1]) : undefined,
    rooms: roomsMatch ? parsePositiveInt(roomsMatch[1], defaultGuests.rooms) : undefined
  };
}

export function formatGuestRoomLabel({ adults, children, rooms }: GuestRoomState) {
  const guestCount = adults + children;
  const guestLabel = `${guestCount} ${guestCount === 1 ? 'guest' : 'guests'}`;
  const childLabel = children > 0 ? ` (${children} ${children === 1 ? 'child' : 'children'})` : '';
  return `${guestLabel}${childLabel}, ${rooms} ${rooms === 1 ? 'room' : 'rooms'}`;
}

export function parseHolidaySearchParams(params: SearchParamsInput): HolidaySearchState {
  const legacyGuests = parseLegacyGuests(readSearchParam(params, 'guests').trim());
  const adults = parsePositiveInt(readSearchParam(params, 'adults').trim(), legacyGuests.adults ?? defaultGuests.adults);
  const children = parseChildren(readSearchParam(params, 'children').trim() || `${legacyGuests.children ?? defaultGuests.children}`);
  const rooms = parsePositiveInt(readSearchParam(params, 'rooms').trim(), legacyGuests.rooms ?? defaultGuests.rooms);
  const budget = readSearchParam(params, 'budget').trim();

  return {
    destination: readSearchParam(params, 'destination').trim(),
    checkIn: normaliseDateParam(readFirstParam(params, ['checkIn', 'check-in']).trim()),
    checkOut: normaliseDateParam(readFirstParam(params, ['checkOut', 'check-out']).trim()),
    adults,
    children,
    rooms,
    month: readSearchParam(params, 'month').trim(),
    budget,
    style: readSearchParam(params, 'style').trim(),
    board: readSearchParam(params, 'board').trim() || 'Any',
    maxBudget: readSearchParam(params, 'maxBudget').trim() || budget,
    sort: readSearchParam(params, 'sort').trim() || 'recommended'
  };
}

export function buildHolidaySearchParams(state: Partial<HolidaySearchState>) {
  const params = new URLSearchParams();
  const adults = state.adults ?? defaultGuests.adults;
  const children = state.children ?? defaultGuests.children;
  const rooms = state.rooms ?? defaultGuests.rooms;

  if (state.destination?.trim()) params.set('destination', state.destination.trim());
  if (state.checkIn?.trim()) params.set('checkIn', state.checkIn.trim());
  if (state.checkOut?.trim()) params.set('checkOut', state.checkOut.trim());
  params.set('guests', String(adults + children));
  params.set('adults', String(adults));
  if (children > 0) params.set('children', String(children));
  params.set('rooms', String(rooms));
  if (state.style?.trim() && state.style !== 'Any') params.set('style', state.style.trim());
  if (state.board?.trim() && state.board !== 'Any') params.set('board', state.board.trim());
  if (state.maxBudget?.trim()) params.set('maxBudget', state.maxBudget.trim());
  if (state.sort?.trim() && state.sort !== 'recommended') params.set('sort', state.sort.trim());
  if (state.month?.trim()) params.set('month', state.month.trim());
  if (state.budget?.trim()) params.set('budget', state.budget.trim());

  return params;
}
