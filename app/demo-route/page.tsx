import GoBackButton from "@/components/ui/go-back-btn";

type Props = {};

export default function DemoRoute({}: Props) {
  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-top p-24">
      DemoRoute
      <GoBackButton />
    </div>
  );
}
