'use client';

import { type KeyboardEvent, useId, useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';

type DestinationSearchComboboxProps = {
  name?: string;
  defaultValue?: string;
  options: string[];
  label?: string;
  placeholder?: string;
  compact?: boolean;
};

function normalise(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export function DestinationSearchCombobox({
  name = 'destination',
  defaultValue = '',
  options,
  label = 'Where to?',
  placeholder = 'Search destinations, resorts or styles',
  compact = false
}: DestinationSearchComboboxProps) {
  const id = useId();
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const listboxId = `${id}-destinations`;
  const inputId = `${id}-input`;

  const matches = useMemo(() => {
    const query = normalise(value);
    const uniqueOptions = options.filter((option, index, all) => all.indexOf(option) === index);
    const ranked = uniqueOptions
      .map((option) => ({ option, text: normalise(option) }))
      .filter(({ text }) => !query || text.includes(query))
      .sort((a, b) => {
        if (!query) return 0;
        const aStarts = a.text.startsWith(query) ? -1 : 0;
        const bStarts = b.text.startsWith(query) ? -1 : 0;
        return aStarts - bStarts || a.option.localeCompare(b.option);
      })
      .slice(0, compact ? 5 : 7);

    return ranked.length > 0 ? ranked : uniqueOptions.slice(0, compact ? 5 : 7).map((option) => ({ option, text: normalise(option) }));
  }, [compact, options, value]);

  function chooseOption(option: string) {
    setValue(option);
    setActiveIndex(0);
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.min(matches.length - 1, current + 1));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.max(0, current - 1));
    }

    if (event.key === 'Enter' && isOpen && matches[activeIndex]) {
      event.preventDefault();
      chooseOption(matches[activeIndex].option);
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div className={`destination-combobox ${compact ? 'is-compact' : ''}`}>
      <label htmlFor={inputId} className="control-label">{label}</label>
      <div className="destination-input-wrap">
        <Icon name="pin" className="control-icon" />
        <input
          id={inputId}
          name={name}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setActiveIndex(0);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={isOpen && matches[activeIndex] ? `${listboxId}-${activeIndex}` : undefined}
        />
      </div>
      {isOpen ? (
        <div className="destination-menu glass-card" id={listboxId} role="listbox" aria-label="Suggested destinations">
          {matches.map(({ option }, index) => (
            <button
              id={`${listboxId}-${index}`}
              key={option}
              type="button"
              role="option"
              aria-selected={index === activeIndex || normalise(option) === normalise(value)}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => chooseOption(option)}
            >
              <Icon name={index === activeIndex ? 'pin' : 'search'} />
              <span>{option}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
