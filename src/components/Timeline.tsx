import React from 'react';
import { Event } from '../types';

interface Props {
  events: Event[];
  active: number;
  onSelect: (index: number) => void;
}

const Timeline: React.FC<Props> = ({ events, active, onSelect }) => (
  
  function handleKeyDown(e, index) {
    if (e.key === 'ArrowLeft') {
      onSelect(index - 1);
    }
    if (e.key === 'ArrowRight') {
      onSelect(index + 1);
    }
  }

  
  <ul role="tablist" className="timeline-list">
      {events.map((ev, i) => (
        <li key={ev.year} className="timeline-item">
          <div
            className={`timeline-dot ${i === active ? 'active' : ''}`}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            tabIndex={0}
          />
        <span>{ev.year}</span>
      </li>
    ))}
  </ul>
);


export default Timeline;

