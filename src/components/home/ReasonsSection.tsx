import { SectionShell } from "@/components/ui/SectionShell";
import { reasons, type Reason } from "@/lib/content";
import {
  TvIcon,
  downloadIcon as DownloadIcon,
  profileKitIcon as ProfileKidsIcon,
  watchIcon as WatchIcon,
  type IconProps,
} from "@/lib/svgIcon";

const iconMap: Record<Reason["icon"], (props: IconProps) => React.JSX.Element> = {
  devices: WatchIcon,
  download: DownloadIcon,
  kids: ProfileKidsIcon,
  tv: TvIcon,
};

function ReasonCard({ reason }: { reason: Reason }) {
  const Icon = iconMap[reason.icon];

  return (
    <li>
      <article
        className="relative flex h-full min-h-[292px] overflow-hidden rounded-lg p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:min-h-[348px] lg:p-6"
        style={{ background: reason.background }}
      >
        <div className="relative z-10 max-w-[30ch] pb-24">
          <h3 className="text-2xl leading-tight font-bold text-white lg:text-[28px]">
            {reason.title}
          </h3>
          <p className="mt-6 text-base leading-[1.22] font-semibold text-white/70 sm:text-lg lg:text-xl">
            {reason.description}
          </p>
        </div>
        <Icon
          aria-hidden
          className="pointer-events-none absolute right-6 bottom-6 h-[72px] w-[72px]"
        />
      </article>
    </li>
  );
}

export function ReasonsSection() {
  return (
    <SectionShell title="More reasons to join">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </ul>
    </SectionShell>
  );
}
