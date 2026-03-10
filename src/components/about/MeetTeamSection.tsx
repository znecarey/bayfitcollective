import Image from "next/image";
import { Container } from "../ui/Container";

const team = [
  {
    id: "coach-alex",
    name: "Coach Alex",
    role: "Founder / Coach",
    image:
      "https://images.pexels.com/photos/7676403/pexels-photo-7676403.jpeg",
  },
  {
    id: "coach-tbd",
    name: "TBD",
    role: "Coach",
    image: null,
  },
  {
    id: "community-tbd",
    name: "TBD",
    role: "Community Lead",
    image: null,
  },
  {
    id: "ops-tbd",
    name: "TBD",
    role: "Operations",
    image: null,
  },
];

export function MeetTeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <h2 className="heading-font text-center text-2xl font-normal uppercase tracking-[0.18em] text-black sm:text-3xl">
          Meet The Team
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f5]">
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
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                  Bio
                </p>
                <p className="text-sm font-semibold text-black">{member.name}</p>
                <p className="text-xs text-black/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

