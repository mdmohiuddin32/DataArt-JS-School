let events = [];

async function loadEvents() {
    const response = await fetch("events.json");
    events = await response.json();
    renderTimeline();
    clickHandler();
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    let timelineHTML = '<ul class="timeline-list">';
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


function clickHandler() {
    const learnMoreBtn = document.querySelector('article button');
    learnMoreBtn.addEventListener('click', openModal);
}


function openModal() {
    const modal = document.getElementById('modal');
    const firstEvent = events[0];
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">&times;</button>
            <h2>${firstEvent.year}</h2>
            <h1>${firstEvent.title}</h1>
            
            <figure>
                <img src="${firstEvent.imageURL}" alt="first-personal-computer" />
                <figcaption>The First Personal Computer - ${firstEvent.year}</figcaption>
            </figure>

            <p>${firstEvent.description}</p>

            </div>
    `;
    modal.style.display = 'block';
    
    document.querySelector('.close-btn')
        .addEventListener('click', closeModal);
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


loadEvents();
