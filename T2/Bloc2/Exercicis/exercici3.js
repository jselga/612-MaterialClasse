// - Tasques
//      Crea una funció validate(dades) que retorni un array d’errors.
//      Si hi ha errors: mostrar-los al costat de cada camp.
//      Si no n’hi ha: afegir la tasca al <ul> i fer form.reset().
//      Valida:
//      Nom obligatori i mínim 3 caràcters.
//      Nom alfabètic
//      Categoria seleccionada (no pot ser value="")
//      Data amb format DD/MM/YYYY
//      Data no anterior a l'actual
// - Pistes
//      Usa delegació de funcions: validate(), renderErrors(), render().
//      Pots usar .value o FormData.

function validate(dades) {
  const errors = [];

  // Nom obligatori i mínim 3 caràcters
  if (dades.nom == null || dades.nom.length < 3) {
    errors.push("El nom ha de tenir com a mínim 3 caràcters.");
  }
  if (/[^a-zA-ZÀ-ÿ]/.test(dades.nom)) {
    // Nom alfabètic
    errors.push("El nom només pot contenir lletres.");
  }
  // Categoria seleccionada (no pot ser "")
  if (dades.categoria == null || dades.categoria === "") {
    errors.push("Has de seleccionar alguna categoria.");
  }
  // Data amb format DD/MM/YYYY
  const dataStr = (dades.data ?? "").trim();
  const match = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.exec(
    dataStr,
  );

  if (!match) {
    errors.push("La data ha de tenir format DD/MM/YYYY.");
  } else {
    const dd = Number(match[1]);
    const mm = Number(match[2]);
    const yyyy = Number(match[3]);

    const data = new Date(yyyy, mm - 1, dd);

    // comprova data real (evita 31/02/2026 -> autocorrecció)
    if (
      data.getFullYear() !== yyyy ||
      data.getMonth() !== mm - 1 ||
      data.getDate() !== dd
    ) {
      errors.push({ field: "data", msg: "La data no és vàlida." });
    } else {
      // Data no anterior a l'actual (avui)
      const avui = new Date();
      avui.setHours(0, 0, 0, 0);
      data.setHours(0, 0, 0, 0);

      if (data < avui) {
        errors.push("La data no pot ser anterior a l'actual.");
      }
    }
  }

  return errors;
}

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("form-tasca");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fdata = new FormData(event.target);
    const data = {
      nom: fdata.get("nom"),
      categoria: fdata.get("categoria"),
      data: fdata.get("data"),
    };

    const errors = document.getElementById("errors");
    errors.childNodes.forEach((child) => {
      errors.removeChild(child);
    });

    const validations = validate(data);

    if (validations.length != 0) {
      const ul = document.createElement("ul");

      validations.forEach((validation) => {
        const li = document.createElement("li");
        li.innerText = validation;
        ul.appendChild(li);
      });
      errors.appendChild(ul);
      console.log(validations);
    } else {
      const llista = document.getElementById("llistaTasques");
      const li = document.createElement("li");
      li.innerText = `${data.nom} | ${data.categoria} | ${data.data}`;
      llista.appendChild(li);
    }
  });
});
