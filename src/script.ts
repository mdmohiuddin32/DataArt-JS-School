import { loadEvents } from './fetcher.js';
import { renderTimeline } from './renderer.js';
import { initModal } from './modal.js';

async function init(): Promise<void> {
    try {
        const events = await loadEvents();
        renderTimeline(events);
        initModal(events);
    } catch (error) {
        console.error('Failed to initialize app:', error);
    }
}

init();