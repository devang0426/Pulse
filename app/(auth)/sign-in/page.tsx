"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FloatingLines from "@/components/FloatingLines";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);

      if (result.success) {
        toast.success("Signed in successfully!");
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed", {
        description:
          e instanceof Error ? e.message : "Failed to sign in.",
      });
    }
  };

 return (
  <>  
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <FloatingLines
        enabledWaves={['top', 'bottom']}
        lineCount={[10, 15, 20]}
        lineDistance={[8, 6, 4]}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={false}
        parallax={true}
      />
    </div>

    <div className="relative z-10 max-w-lg mx-auto py-20 px-6">
      <h1 className="form-title text-3xl font-bold text-center mb-6">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <InputField
          name="email"
          label="Email"
          placeholder="contact@xyz.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\w+@\w+\.\w+$/,
              message: "Invalid email address",
            },
          }}
        />

        {/* Password */}
        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "At least 6 characters",
            },
          }}
        />

        {/* Transparent gradient‑text button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full mt-5
            bg-transparent
            hover:bg-transparent
            focus:bg-transparent
            active:bg-transparent
            shadow-none
            border-none
            outline-none
            focus:ring-0
            cursor-pointer
            transition-transform
            hover:scale-105
            py-2 px-4 rounded-lg
          "
        >
          <span className="bg-linear-to-r from-[#FF3232] to-[#00FFB4] bg-clip-text text-transparent font-semibold">
            {isSubmitting ? "Signing In..." : "Sign In to Your Account"}
          </span>
        </Button>

        {/* Link to Sign Up */}
        <FooterLink
          text="Don't have an account?"
          linkText="Sign up"
          href="/sign-up"
        />
      </form>
    </div>
  </>
);
}

export default SignIn;
