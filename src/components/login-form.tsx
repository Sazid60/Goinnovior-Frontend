"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { loginUser } from "@/services/auth/loginUser";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [showPassword, setShowPassword] = useState(false);

  const demoCredentials = {
    admin: { email: "admin@gmail.com", password: "Admin@12345" },
    client: { email: "client@gmail.com", password: "Client@12345" },
  };
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleDemoLogin = (type: keyof typeof demoCredentials) => {
    const creds = demoCredentials[type];
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = creds.email;
      passwordRef.current.value = creds.password;
    }
  };

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="w-full max-w-[320px] md:max-w-[420px] space-y-4" autoComplete="off">
      {redirect && <input type="hidden" name="redirect" value={redirect} />}

      <div>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-teal-500 transition-colors" />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            disabled={isPending}
            className="w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400"
            ref={emailRef}
          />
        </div>
        <div className="mt-1">
          <InputFieldError field="email" state={state} />
        </div>
      </div>

      <div>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-teal-500 transition-colors" />
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            disabled={isPending}
            className="w-full h-11 md:h-12 pl-12 pr-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400"
            ref={passwordRef}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="mt-1">
          <InputFieldError field="password" state={state} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
        <Button type="button" variant="outline" className="border-[#45aaa2] text-[#45aaa2] hover:bg-[#e0f7f4]" onClick={() => handleDemoLogin("client")}>Client Login</Button>
        <Button type="button" variant="outline" className="border-[#45aaa2] text-[#45aaa2] hover:bg-[#e0f7f4]" onClick={() => handleDemoLogin("admin")}>Admin Login</Button>
      </div>

      <div className="w-full text-right">
        <button
          type="button"
          className="text-[10px] md:text-[11px] text-neutral-600 hover:text-black transition-colors font-medium"
        >
          Forget Password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-11 md:h-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95 disabled:opacity-70"
      >
        {isPending ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
};

export default LoginForm;