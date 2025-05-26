// Modal logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Toggle visibility of input sections
const toggleInput = (selectId, inputId) => {
  document.getElementById(selectId).addEventListener("change", () => {
    document.getElementById(inputId).classList.toggle("hidden",
      document.getElementById(selectId).value !== "ya");
  });
};

['welkin', 'bp', 'kode'].forEach(id => toggleInput(id, id + 'Input'));
toggleInput('eventPhase', 'eventPhaseInput');

function hitungPrimogem() {
  let total = 0;
  const hari = parseInt(document.getElementById("hari").value);
  total += hari * 60;

  if (document.getElementById("welkin").value === "ya") {
    const welkinHari = parseInt(document.getElementById("welkinHari").value) || 0;
    total += Math.min(welkinHari, hari) * 90;
  }

  if (document.getElementById("bp").value === "ya") {
    total += (parseInt(document.getElementById("bpItem").value) || 0) * 160;
    if (document.getElementById("bpMax").value === "ya") {
      total += 680;
    }
  }

  total += (parseInt(document.getElementById("abyss").value) || 0);
  total += (parseInt(document.getElementById("theater").value) || 0);
  if (document.getElementById("eventPhase").value === "ya") {
    total += (parseInt(document.getElementById("eventPhasePrimo").value) || 0);
  }

  if (document.getElementById("kode").value === "ya") {
    total += (parseInt(document.getElementById("kodePrimo").value) || 0);
  }

  const pull = Math.floor(total / 160);
  const sisa = total % 160;

  document.getElementById("hasil").innerText =
    `Total Primogem: ${total} | Setara dengan ${pull} pull (sisa ${sisa} Primogem)`;

  return false;
}
