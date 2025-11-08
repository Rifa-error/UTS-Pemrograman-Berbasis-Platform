let lahan = [
  ["subur", "subur", "kering", "subur"],
  ["kering", "tandus", "subur", "kering"],
  ["subur", "subur", "kering", "subur"],
  ["tandus", "kering", "kering", "kering"]
];


let cuaca = {
  suhu: 28,         
  kelembapan: 65,   
  angin: 10         
};


for (let i = 0; i < lahan.length; i++) {
  let suburCount = 0;
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      suburCount++;
    }
  }

  let persentaseSubur = (suburCount / lahan[i].length) * 100;

  if (persentaseSubur < 50) {
    for (let j = 0; j < lahan[i].length; j++) {
      lahan[i][j] = "kering";
    }
  }
}

let totalSubur = 0;
for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      totalSubur++;
    }
  }
}

let cuacaCocok = (
  cuaca.suhu >= 20 && cuaca.suhu <= 30 &&
  cuaca.kelembapan > 50 &&
  cuaca.angin < 15
);

let totalDitanami = cuacaCocok ? totalSubur : 0;

console.log("=== HASIL ANALISIS LAHAN PERKEBUNAN ===");
console.log("Total petak subur:", totalSubur);
console.log("Total petak yang ditanami:", totalDitanami);

if (cuacaCocok) {
  console.log("Cuaca cocok untuk bercocok tanam 🌱");
} else {
  console.log("⚠️ Cuaca tidak cocok untuk bercocok tanam!");
}

console.log("\nKondisi lahan terbaru:");
console.table(lahan);
