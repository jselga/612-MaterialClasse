import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schemas/userSchema";
import Input from "./Input";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });
  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action="" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" type="text" register={register} error={errors.name} placeholder="Escriu el teu nom...">
      Nom
      </Input>
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
        {errors?.lastname?.message ?? <p>{errors?.lastname?.message}</p>}
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
