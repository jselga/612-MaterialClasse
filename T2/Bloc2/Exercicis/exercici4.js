// Helpers
function notEmpty(v) {
  return v != null && String(v).trim() !== "";
}

function minLen(v, n) {
  return String(v ?? "").trim().length >= n;
}

function isAlphabet(v) {
  // Només lletres (sense espais). Si vols permetre espais, canvia el regex.
  return /^[a-zA-ZÀ-ÿ]+$/.test(String(v ?? "").trim());
}

function parseDDMMYYYY(str) {
  const s = String(str ?? "").trim();

  // Rang simple al regex:
  // - dia 01..31
  // - mes 01..12
  // - any 0000..2027
  const m = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.exec(s);
  if (!m) return { ok: false, reason: "format" };

  const dd = Number(m[1]);
  const mm = Number(m[2]);
  const yyyy = Number(m[3]);

  if (yyyy > 2027) return { ok: false, reason: "year" };

  // Validació avançada (calendari real): evita 31/11, 30/02, etc.
  const d = new Date(yyyy, mm - 1, dd);
  const real =
    d.getFullYear() === yyyy && d.getMonth() === mm - 1 && d.getDate() === dd;

  if (!real) return { ok: false, reason: "calendar" };

  return { ok: true, date: d };
}

function startOfToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

// Validate: retorna array d'errors (estil teu), però amb field per poder marcar is-invalid
function validate(dades) {
  const errors = [];

  // NOM
  if (!notEmpty(dades.nom) || !minLen(dades.nom, 3)) {
    errors.push({
      field: "nom",
      msg: "El nom ha de tenir com a mínim 3 caràcters.",
    });
  } else if (!isAlphabet(dades.nom)) {
    errors.push({ field: "nom", msg: "El nom només pot contenir lletres." });
  }

  // CATEGORIA
  if (!notEmpty(dades.categoria)) {
    errors.push({
      field: "categoria",
      msg: "Has de seleccionar alguna categoria.",
    });
  }

  // DATA
  const parsed = parseDDMMYYYY(dades.data);

  if (!notEmpty(dades.data)) {
    errors.push({ field: "data", msg: "La data és obligatòria." });
  } else if (!parsed.ok) {
    let msg = "La data ha de tenir format DD/MM/YYYY.";
    if (parsed.reason === "year") msg = "L'any no pot ser superior a 2027.";
    if (parsed.reason === "calendar") msg = "La data no és vàlida (calendari).";
    errors.push({ field: "data", msg });
  } else {
    const avui = startOfToday();
    const data = new Date(parsed.date);
    data.setHours(0, 0, 0, 0);

    if (data < avui) {
      errors.push({
        field: "data",
        msg: "La data no pot ser anterior a l'actual.",
      });
    }
  }

  return errors;
}

// UI helpers (errors + is-invalid)
function clearErrors() {
  const box = document.getElementById("errors");
  box.innerHTML = "";
}

function renderErrors(errors) {
  const box = document.getElementById("errors");
  const ul = document.createElement("ul");

  errors.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e.msg;
    ul.appendChild(li);
  });

  box.appendChild(ul);
}

function clearInvalid(form) {
  form
    .querySelectorAll(".is-invalid")
    .forEach((el) => el.classList.remove("is-invalid"));
}

function markInvalid(form, errors) {
  errors.forEach((e) => {
    const input = form.querySelector(`[name="${e.field}"]`);
    if (input) input.classList.add("is-invalid");
  });
}

function renderTask(dades) {
  const llista = document.getElementById("llistaTasques");
  const li = document.createElement("li");
  li.innerText = `${dades.nom} | ${dades.categoria} | ${dades.data}`;
  llista.appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-tasca");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dades = Object.fromEntries(formData.entries());

    console.table(dades);

    clearErrors();
    clearInvalid(form);

    const errors = validate(dades);

    if (errors.length > 0) {
      renderErrors(errors);
      markInvalid(form, errors);
      return;
    }

    renderTask(dades);
    form.reset();
  });
});
