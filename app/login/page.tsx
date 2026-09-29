import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { SocialSignIn } from "@/components/auth/social-sign-in";
import { TextField } from "@/components/auth/text-field";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to ByteSpace to continue learning.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footerOffsetClassName="xl:pb-10"
        footer={
          <>
            <span className="text-muted">New user?</span>{" "}
            <Link href="/register" className="text-primary hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <AuthForm submitLabel="Sign In">
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            required
          />
        </AuthForm>
        <SocialSignIn />
      </AuthCard>
    </AuthLayout>
  );
}
