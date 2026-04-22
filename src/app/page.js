import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Button>Click Me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
