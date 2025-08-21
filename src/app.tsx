import React, { useState } from 'react';
import { useEvents } from './hooks/useEvents';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';

const App: React.FC = () => {
  const { events, loading, error } = useEvents();
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p>Error: {error}</p>;
  if (!events.length) return <p>No events</p>;

  const evt = events[active];

  return (
    <>
      <Timeline events={events} active={active} onSelect={setActive} />

      <article>
        <h2>{evt.year}</h2>
        <h1>{evt.title}</h1>
        <figure>
          <img src={evt.imageURL} alt={evt.title} />
          <figcaption>{evt.title}</figcaption>
        </figure>
        <p>{evt.description}</p>
        <button onClick={() => setModalOpen(true)}>Learn More</button>
      </article>

      <EventModal event={evt} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default App;
