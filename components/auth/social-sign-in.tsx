import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/assets/icons/facebook.svg" },
  { name: "Google", icon: "/assets/icons/google.svg" },
];

/** "or" divider followed by the social sign-in buttons (Login only). */
export function SocialSignIn() {
  return (
    <div className="mt-[73px] flex flex-col gap-10">
      <div className="flex w-full max-w-[439px] items-center gap-[11px]" role="separator" aria-label="or">
        <span className="h-px flex-1 bg-divider" />
        <span aria-hidden className="body-l text-muted">
          or
        </span>
        <span className="h-px flex-1 bg-divider" />
      </div>

      <ul className="flex justify-center gap-4">
        {providers.map((provider) => (
          <li key={provider.name}>
            {/* No OAuth provider is configured yet; the buttons are UI only. */}
            <button
              type="button"
              aria-label={`Sign in with ${provider.name}`}
              className="flex size-[72px] items-center justify-center rounded-3xl border border-divider bg-white transition-colors hover:bg-shuttle-50"
            >
              <Image src={provider.icon} alt="" width={40} height={40} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
