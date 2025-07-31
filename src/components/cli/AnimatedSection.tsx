import { FadeIn } from "../animation/FadeIn";

export function AnimatedSection({ children }: { children: any }) {
  return (
    <div className="my-16">
      <FadeIn>
        {children}
      </FadeIn>
    </div>
  );
}
