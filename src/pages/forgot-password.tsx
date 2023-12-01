import * as z from "zod";
import { useState } from "react";
import { toast } from "react-toastify";
import Text from "@components/ui/text";
import Input from "@components/ui/input";
import Paper from "@components/ui/paper";
import Button from "@components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Flex } from "@components/ui/common";
import { MdMail as Mail } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().min(1, "Required").email(),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { email } = data;

    setLoading(true);

    await toast.promise<any>(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "admin@gmail.com") resolve(email);
          else reject(null);
          setLoading(false);
        }, 2000);
      }),
      {
        pending: "Loading in...",
        success: "check email",
        error: "your request failed!",
      }
    );
  }

  return (
    <Paper className="w-[21rem] px-6">
      <Flex className="flex-col">
        <img src="imgs/logo.png" alt="Fastsale Logo" width={150} height={25} />
        <Text type="subtitle1">Forgot your Password</Text>
      </Flex>
      <form
        method="post"
        className="pt-4 pb-3 space-y-4"
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
        <Button
          fullWidth
          size="md"
          loading={loading}
          className="btn-solid-primary"
        >
          Forgot Password!
        </Button>
      </form>
      <Text type="caption" className="p-0 font-medium">
        Go back to login page?
        <Link to={-1 as any} className="pl-1 btn-link-primary">
          Click Here
        </Link>
      </Text>
    </Paper>
  );
}
