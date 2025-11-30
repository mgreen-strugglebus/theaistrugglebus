import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  name: string;
  description: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "tall";
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[2/1]",
  tall: "aspect-[3/4]",
};

export function ImagePlaceholder({
  name,
  description,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-secondary bg-secondary/20 p-6 text-center",
        aspectClasses[aspectRatio],
        className
      )}
      role="img"
      aria-label={description}
    >
      <div className="mb-2 text-4xl">🚌</div>
      <p className="font-semibold text-foreground">{name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
