export async function loadEvents() {
    const response = await fetch("events.json");
    return await response.json();
}
//# sourceMappingURL=fetcher.js.map