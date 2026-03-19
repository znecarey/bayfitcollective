import Image from "next/image";

const team = [
  {
    id: "logan",
    name: "Logan",
    role: "Head of Brand & Partnerships",
    image: "/images/logan.png",
  },
  {
    id: "brandan",
    name: "Brandan",
    role: "Head of Community & Outreach",
    image: "/images/brandan.png",
  },
  {
    id: "dav",
    name: "Dav",
    role: "Head of Lifestyle & Apparel",
    image: "/images/dav.png",
  },
  {
    id: "zane",
    name: "Zane",
    role: "Head of Product & Design",
    image: "",
  },
  {
    id: "dwight",
    name: "Dwight",
    role: "Creative Director",
    image: "",
  },
];

export function MeetTeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10">
        <h2 className="heading-font text-center text-4xl font-normal uppercase tracking-[0.18em] text-black sm:text-5xl">
          Meet The Team
        </h2>
        <div className="grid justify-items-center gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="relative mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5] sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
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
                <p className="text-sm text-black/80 sm:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

