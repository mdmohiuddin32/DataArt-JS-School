import { createPortal } from 'react-dom';
import { Event } from '../types';

interface Props{
  event: Event|null;
  open : boolean;
  onClose: () => void;
}

export default function EventModal({ event, open, onClose }: Props){
  if (!open || !event) return null;      // nothing rendered → no backdrop
  
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

   function trapFocus(e) {
    if (e.key === 'Tab') {
      const focusable = e.currentTarget.querySelectorAll('button, img');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      
      if (e.shiftKey && e.target === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && e.target === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  
  return createPortal(
    <div className="overlay" onClick={onClose} onKeyDown={handleKeyDown} >
      <div role="dialog" className="modal-content" onClick={e => e.stopPropagation()} onKeyDown={trapFocus}>
        <button aria-label="Close modal" className="close-btn" onClick={onClose}>&times;</button>
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



