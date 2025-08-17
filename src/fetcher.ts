import type { Event } from './types.js';

export async function loadEvents(): Promise<Event[]> {
    const response = await fetch("events.json");
    return await response.json();
}