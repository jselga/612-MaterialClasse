import { useState } from "react";
function Form() {
  const [user, setUser] = useState({ name: "", lastname: "" });
  const [errors, setErrors] = useState([]);
  /**
   *
   * @param {import("react").FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const minChars = 3;
    const newErrors = [];
    if (user.name.trim().length < minChars) {
      newErrors.push(`El nom ha de tenir ${minChars} caràcters o més`);
    }
    if (user.lastname.trim().length < minChars) {
      newErrors.push(`El cognom ha de tenir ${minChars} caràcters o més`);
    }
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors([]);
    console.log(user);
  };
  return (
    // form>div.mb-3*2>label.form-label+input#name.form-control
    <form action="" noValidate onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Cognom
        </label>
        <input
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>

      {errors.length > 0 && (
        <ul className="text-danger">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
