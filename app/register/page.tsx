import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { TextField } from "@/components/auth/text-field";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Join ByteSpace to learn from creators or publish your own courses.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footerOffsetClassName="xl:pb-[51px]"
        footer={
          <>
            <span className="text-shuttle-700">Already have an account?</span>{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </>
        }
      >
        <AuthForm submitLabel="Continue">
          <TextField
            label="Full Name"
            name="name"
            placeholder="Jamie Davis"
            autoComplete="name"
            required
          />
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
            autoComplete="new-password"
            required
          />
        </AuthForm>
      </AuthCard>
    </AuthLayout>
  );
}
