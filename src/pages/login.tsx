import * as z from "zod";
import { useState } from "react";
import Text from "@components/ui/text";
import Input from "@components/ui/input";
import Paper from "@components/ui/paper";
import Button from "@components/ui/button";
import Checkbox from "@components/ui/check-box";
import rememberInfo from "@utils/remember-info";
import { MdMail as Mail, MdLock as Lock } from "react-icons/md";
import {
  AiOutlineEye as Eye,
  AiOutlineLogin as LoginIcon,
  AiOutlineEyeInvisible as EyeOff,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@app/hooks";
import { Flex } from "@components/ui/common";
import { setAuth } from "@app/features/auth.slice";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().min(1, "Required").email(),
  password: z.string().min(1, "Required"),
  check: z.boolean(),
});

export default function Login() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => setShow(!show);

  const EyeIcon = show ? Eye : EyeOff;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: rememberInfo.get(),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.check) rememberInfo.save(data);
    else rememberInfo.remove();

    const { email, password } = data;

    setLoading(true);

    const res = await toast.promise<any>(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email == "admin@gmail.com" && password == "admin@789")
            resolve({
              email,
              _id: "2",
              first_name: "Aashish",
              last_name: "Panchal",
              password,
            });
          else reject(null);
          setLoading(false);
        }, 2000);
      }),
      {
        pending: "Loading in...",
        success: "logged in!",
        error: "login failed!",
      }
    );

    dispatch(setAuth(res));
  }

  return (
    <Paper className="w-[21rem] px-6">
      <Flex className="flex-col">
        <img src="imgs/logo.png" alt="Fastsale Logo" width={150} height={25} />
        <Text type="subtitle1">Login to your account.</Text>
      </Flex>
      <form
        method="post"
        className="py-3 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          fullWidth
          placeholder="Email"
          {...register("email")}
          left={(props) => <Mail {...props} />}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Input
          fullWidth
          placeholder="Password"
          {...register("password")}
          type={show ? "text" : "password"}
          left={(props) => <Lock {...props} />}
          right={({ className, ...props }) => (
            <EyeIcon
              {...props}
              onClick={toggle}
              className={twMerge(className, "cursor-pointer")}
            />
          )}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Flex className="justify-between">
          <Checkbox {...register("check")} label="Remember me" />
          <Link to="/forgot-password" className="text-xs btn-link-primary">
            Forgot Password?
          </Link>
        </Flex>
        <Button
          fullWidth
          size="md"
          loading={loading}
          className="btn-solid-primary"
          left={(props) => <LoginIcon {...props} />}
        >
          Login
        </Button>
      </form>
      <h1 className="text-xs">Please use 'admin@gmail.com' and 'admin@789'</h1>
    </Paper>
  );
}
