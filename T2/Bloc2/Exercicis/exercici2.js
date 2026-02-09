// - Valida:
//   - Nom obligatori i mínim 3 caràcters.
//   - Edat > 0.
//   - Email amb format vàlid (p.ex. amb una expressió regular simple)
//   - Si s’introdueix `url` (camp opcional), comprovar que tingui format vàlid (`type="url"` ja aplica restriccions per HTML, però s'ha de fer la validació també amb JS utilitzant regex si cal).
// - Si hi ha errors, mostra’ls dins un `<ul>` a `#errors`.
// - Si no hi ha errors, mostra un missatge d’èxit.

// > Nota: Per defecte hi ha camps que el navegador els valida per HTML (com per exemple email i url). Si es vol deshabilitar la validació HTML s'ha de posar `novalidate` al tag `<form>`.

function validate(data) {
  const errors = [];
  if (data.nom == null) {
    errors.push("Nom és un camp necessari.");
  }
  if (data.nom.length < 3) {
    errors.push("Nom ha de tenir com a mínim 3 caràcters.");
  }
  if (data.edat <= 0) {
    errors.push("Edat ha de ser major que zero.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("email no vàlid.");
  }

  if (errors.length == 0) {
    errors.push("Tot OK!");
  }

  return errors;
}

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("form-validacio");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fdata = new FormData(event.target);
    const data = {
      nom: fdata.get("nom"),
      edat: fdata.get("edat"),
      email: fdata.get("email"),
      url: fdata.get("url"),
    };

    const errors = document.getElementById("errors");
    errors.childNodes.forEach((child) => {
      errors.removeChild(child);
    });

    const validations = validate(data);
    const ul = document.createElement("ul");

    validations.forEach((validation) => {
      const li = document.createElement("li");
      li.innerText = validation;
      ul.appendChild(li);
    });
    errors.appendChild(ul);
  });
});
