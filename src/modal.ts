import type { Event } from './types.js';

export function initModal(events: Event[]): void {
    const learnMoreBtn = document.querySelector('article button')!;
    learnMoreBtn.addEventListener('click', () => openModal(events[0]!));
}

function openModal(event: Event): void {
    const modal = document.getElementById('modal')!;
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">&times;</button>
            <h2>${event.year}</h2>
            <h1>${event.title}</h1>
            
            <figure>
                <img src="${event.imageURL}" alt="first-personal-computer" />
                <figcaption>The First Personal Computer - ${event.year}</figcaption>
            </figure>
            <p>${event.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    
    document.querySelector('.close-btn')!
        .addEventListener('click', closeModal);
}

function closeModal(): void {
    const modal = document.getElementById('modal')!;
    modal.style.display = 'none';
}