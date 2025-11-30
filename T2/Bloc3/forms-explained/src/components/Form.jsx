import { useState } from "react";
function Form() {
  const [user, setUser] = useState({ name: "", lastname: "" });
  /**
   *
   * @param {import("react").FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    // form>div.mb-3*2>label.form-label+input#name.form-control
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
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
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
