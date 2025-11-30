import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user";
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(form);
  // console.log(register('lastname'));
  // console.log(formState.errors);
  const onSubmit = (data) => {
    try {
      const x = userSchema.parse(data);
      
      console.log(x);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form action="" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          {...register("name")}
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
          {...register("lastname")}
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
