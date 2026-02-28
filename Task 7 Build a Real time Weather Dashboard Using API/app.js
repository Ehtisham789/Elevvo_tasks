const API_KEY = "982e66b57142443ebf9b5355ab0df4a4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

/* ================= DOM ================= */

const canvas = document.getElementById("weatherCanvas");
const ctx = canvas.getContext("2d");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feelsLike = document.getElementById("feelsLike");
const forecastContainer = document.getElementById("forecastContainer");
const loading = document.getElementById("loading");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

/* ================= CANVAS SETUP ================= */

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
let animationType = null;
let cloudOffset = 0;

/* ================= PARTICLES ================= */

class RainDrop {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = Math.random() * 20 + 10;
    this.speed = Math.random() * 4 + 4;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.strokeStyle = "rgba(174,194,224,0.5)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.stroke();
  }
}

class SnowFlake {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 1;
    this.speed = Math.random() * 1 + 0.5;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ================= ANIMATION LOOP ================= */

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (animationType === "rain" || animationType === "snow") {
    particles.forEach(p => {
      p.update();
      p.draw();
    });
  }

  requestAnimationFrame(animate);
}
animate();

/* ================= WEATHER FETCH ================= */

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

async function fetchWeather(city) {
  try {
    showLoading();

    const res = await fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    renderWeather(data);

    const forecastRes = await fetch(`${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`);
    const forecastData = await forecastRes.json();

    renderForecast(forecastData);

  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    hideLoading();
  }
}

/* ================= RENDER ================= */

function renderWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} m/s`;
  pressure.textContent = `${data.main.pressure} hPa`;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
}

function renderForecast(data) {
  forecastContainer.innerHTML = "";

  const daily = data.list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 3);

  daily.forEach(day => {
    const div = document.createElement("div");
    div.classList.add("forecast-item");

    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

    div.innerHTML = `
      <p>${dayName}</p>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
      <p>${day.weather[0].description}</p>
      <h4>${Math.round(day.main.temp)}°C</h4>
    `;

    forecastContainer.appendChild(div);
  });
}

/* ================= EVENTS ================= */

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) fetchWeather(city);
});

searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    fetchWeather(searchInput.value.trim());
  }
});

fetchWeather("London");