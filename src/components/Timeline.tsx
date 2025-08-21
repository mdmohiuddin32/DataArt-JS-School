import React from 'react';
import { Event } from '../types';

interface Props {
  events: Event[];
  active: number;
  onSelect: (index: number) => void;
}

const Timeline: React.FC<Props> = ({ events, active, onSelect }) => (
  <ul className="timeline-list">
    {events.map((ev, i) => (
      <li key={ev.year} className="timeline-item">
        <div
          className={`timeline-dot ${i === active ? 'active' : ''}`}
          onClick={() => onSelect(i)}
        />
        <span>{ev.year}</span>
      </li>
    ))}
  </ul>
);

export default Timeline;