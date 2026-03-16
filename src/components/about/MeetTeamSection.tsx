import Image from "next/image";
import { Container } from "../ui/Container";

const team = [
  {
    id: "founder-logan",
    name: "Logan",
    role: "Founder",
    image: "/images/logan.png",
  },
  {
    id: "cofounder-brandan",
    name: "Brandan",
    role: "Co-founder",
    image: "/images/brandan.png",
  },
  {
    id: "cofounder-dav",
    name: "Dav",
    role: "Co-founder",
    image: "/images/dav.png",
  },
];

export function MeetTeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <h2 className="heading-font text-center text-4xl font-normal uppercase tracking-[0.18em] text-black sm:text-5xl">
          Meet The Team
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="relative mx-auto aspect-square w-56 h-56 sm:w-64 sm:h-64 overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    Photo coming soon
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="text-lg font-semibold text-black sm:text-xl">
                  {member.name}
                </p>
                <p className="text-sm text-black/60 sm:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

