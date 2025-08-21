import { createPortal } from 'react-dom';
import { Event } from '../types';

interface Props{
  event: Event|null;
  open : boolean;
  onClose: () => void;
}

export default function EventModal({ event, open, onClose }: Props){
  if (!open || !event) return null;      // nothing rendered → no backdrop

  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{event.year}</h2>
        <h1>{event.title}</h1>
        <figure>
          <img src={event.imageURL} alt={event.title}/>
          <figcaption>{event.title}</figcaption>
        </figure>
        <p>{event.description}</p>
      </div>
    </div>,
    document.getElementById('modal')!   // empty container until portal mounts
  );
}
