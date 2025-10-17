const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

// Example events
const events = {
"2025-10-01": "Project Submission Deadline",
"2025-10-06": "Guest Lecture: AI Ethics",
"2025-10-16": "Departmental Dues Payment",
};

function renderCalendar(month, year) {
calendarGrid.innerHTML = "";

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

monthYear.textContent = `${monthNames[month]} ${year}`;

// Empty cells before the first day
for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    calendarGrid.appendChild(emptyCell);
}

// Add days
for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day');
    dayCell.textContent = day;

    // Highlight today
    const isToday =
    day === date.getDate() &&
    month === date.getMonth() &&
    year === date.getFullYear();

    if (isToday) dayCell.classList.add('today');

    // Add event if exists
    const eventKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (events[eventKey]) {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.textContent = events[eventKey];
    dayCell.appendChild(eventDiv);
    }

    calendarGrid.appendChild(dayCell);
}
}

prevMonthBtn.addEventListener('click', () => {
currentMonth--;
if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
}
renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
currentMonth++;
if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
}
renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);