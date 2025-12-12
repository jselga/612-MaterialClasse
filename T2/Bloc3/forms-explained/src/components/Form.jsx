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
      <Input
        name="name"
        type="text"
        register={register}
        error={errors.name}
        placeholder="Escriu el teu nom..."
      >
        Nom
      </Input>
      <Input
        name="lastname"
        register={register}
        error={errors.lastname}
        maxLength={15}
      >
        Cognom
      </Input>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
