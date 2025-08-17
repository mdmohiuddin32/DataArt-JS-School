export function renderTimeline(events) {
    const timeline = document.getElementById('timeline');
    let timelineHTML = '<ul class="timeline-list">';
    if (!timeline) {
        throw new Error("Timeline element not found!");
    }
    for (let i = 0; i < events.length; i++) {
        timelineHTML += `
            <li class="timeline-item">
                <div class="timeline-dot"></div>
                <span>${events[i].year}</span>
            </li>
        `;
    }
    timelineHTML += '</ul>';
    timeline.innerHTML = timelineHTML;
    const first = document.querySelector(".timeline-dot");
    first.classList.add("active");
}
//# sourceMappingURL=renderer.js.map