import { cn } from "@/lib/utils";
import { Bus } from "lucide-react";

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
      <Bus className="mb-2 h-10 w-10 text-primary" />
      <p className="font-semibold text-foreground">{name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
