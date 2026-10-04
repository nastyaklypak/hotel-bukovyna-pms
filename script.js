const rooms = [
  { number: 101, type: "Standard", price: 1200, status: "free" },
  { number: 102, type: "Standard", price: 1200, status: "occupied" },
  { number: 103, type: "Standard", price: 1200, status: "cleaning" },
  { number: 201, type: "Deluxe", price: 2000, status: "occupied" },
  { number: 202, type: "Deluxe", price: 2000, status: "free" },
  { number: 301, type: "Suite", price: 3500, status: "free" }
];

const bookings = [
  { id: 1, guest: "Іван Коваль", room: 102, checkIn: "2026-10-03", checkOut: "2026-10-06" },
  { id: 2, guest: "Олена Мельник", room: 201, checkIn: "2026-10-02", checkOut: "2026-10-05" },
  { id: 3, guest: "Андрій Бойко", room: 301, checkIn: "2026-10-08", checkOut: "2026-10-10" }
];

const statusLabels = { free: "Вільний", occupied: "Зайнятий", cleaning: "Прибирання" };

function nights(from, to) {
  return Math.round((new Date(to) - new Date(from)) / 86400000);
}

function renderStats() {
  const count = s => rooms.filter(r => r.status === s).length;
  document.getElementById("stats").innerHTML = `
    <div class="stat"><b>${rooms.length}</b>Усього номерів</div>
    <div class="stat"><b>${count("free")}</b>Вільні</div>
    <div class="stat"><b>${count("occupied")}</b>Зайняті</div>
    <div class="stat"><b>${count("cleaning")}</b>Прибирання</div>`;
}

function renderRooms(filter = "all") {
  const list = filter === "all" ? rooms : rooms.filter(r => r.status === filter);
  document.querySelector("#rooms-table tbody").innerHTML = list.map(r => `
    <tr>
      <td>${r.number}</td><td>${r.type}</td><td>${r.price}</td>
      <td><span class="status ${r.status}">${statusLabels[r.status]}</span></td>
    </tr>`).join("");
}

function renderBookings() {
  document.querySelector("#bookings-table tbody").innerHTML = bookings.map(b => `
    <tr>
      <td>${b.id}</td><td>${b.guest}</td><td>${b.room}</td>
      <td>${b.checkIn}</td><td>${b.checkOut}</td><td>${nights(b.checkIn, b.checkOut)}</td>
    </tr>`).join("");
}

document.getElementById("status-filter").addEventListener("change", e => renderRooms(e.target.value));

renderStats();
renderRooms();
renderBookings();
