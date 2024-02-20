document.getElementById('date').innerHTML = new Date().getFullYear()

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.toLocaleString('default', { month: 'long' });
let year = currentDate.getFullYear();
let formattedDate = currentDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById('header-date').innerHTML = formattedDate;

let week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let dayNumber = new Date().getDay();
let dayName = week[dayNumber];
document.getElementById('days').innerHTML = dayName;