import { useForm } from "react-hook-form";
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(form);
  // console.log(register('lastname'));
  // console.log(formState.errors);
const onSubmit = (data) => console.log(data);
  return (
    
    <form
      action=""
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          {...register("name", {
            minLength: {
              value: 3,
              message: "La longitud mínima és 3",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && <p>{errors?.name?.message}</p>}
  
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Cognom
        </label>
        <input
          {...register("lastname", {
            minLength: {
              value: 3,
              message: "La longitud mínima és 3",
            },
          })}
          type="text"
          id="lastname"
          className="form-control"
        />
              {errors?.lastname && <p>{errors?.lastname?.message}</p>}
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
