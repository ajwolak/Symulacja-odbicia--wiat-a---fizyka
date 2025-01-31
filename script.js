const sunImage = new Image();
sunImage.src = "sun.png";

// Funkcja obsługująca rysowanie zjawiska fizycznego - odbicie światła.
function draw() {
  // Bazowe zmienne potrzebne do funkcji
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const angle = parseInt(document.querySelector("#angle").value);
  const angleValue = document.querySelector("#angleValue");

  // Przypisanie wartości z suwaka do elementu który go wyświetla
  angleValue.textContent = angle + "°";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Punkt odbicia światła na środku dolnej krawędzi
  const cx = canvas.width / 2;
  const cy = canvas.height - 200;

  // Długość promieni światła
  const length = 450;

  // Przeliczenie kąta z stopni na radiany
  // Radiany = stopnie * π / 180
  const rad = (angle * Math.PI) / 180;

  // Obliczenie współrzędnych końca promienia padającego
  // x1 = cx - długość * sin(kąta)
  // y1 = cy - długość * cos(kąta)
  const x1 = cx - length * Math.sin(rad);
  const y1 = cy - length * Math.cos(rad);

  // Obliczenie współrzędnych końca promienia odbitego
  // x2 = cx + długość * sin(kąta)
  // y2 = cy - długość * cos(kąta)
  const x2 = cx + length * Math.sin(rad);
  const y2 = cy - length * Math.cos(rad);

  // Rysowanie powierzchni odbijającej (linia pozioma zielona)
  ctx.strokeStyle = "#12a900";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, cy);
  ctx.lineTo(canvas.width, cy);
  ctx.stroke();

  // Rysowanie promienia padającego (żółta)
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(x1, y1);
  ctx.stroke();

  // Rysowanie promienia odbitego (pomarańczowa)
  ctx.strokeStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Rysowanie linii pionowej przerywanej (szra)
  ctx.setLineDash([8, 8]);
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx, cy - length);
  ctx.stroke();
  ctx.setLineDash([]);

  // Rysowanie ikony słońca na początku promienia padającego
  const sunSize = 70;
  ctx.drawImage(sunImage, x1 - sunSize / 2, y1 - sunSize / 2, sunSize, sunSize);
}

window.onload = draw;
