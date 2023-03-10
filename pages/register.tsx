import { useForm } from "react-hook-form";
import axios from "axios";

  password: string;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/register", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const password = watch("password");

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email?.type === "required" && <span>Email is required</span>}
          {errors.email?.type === "pattern" && (
            <span>Email must contain @</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
              },
            })}
          />
          {errors.password?.type === "required" && (
            <span>Password is required</span>
          )}
          {errors.password?.type === "pattern" && (
            <span>{errors.password?.message}</span>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) => value === password || "Passwords must match",
            })}
          />
          {errors.confirmPassword?.type === "validate" && (
            <span>{errors.confirmPassword?.message}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
