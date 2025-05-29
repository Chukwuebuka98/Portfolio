import { Tilt } from './motion-primitives/tilt';

export default function ProjectCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tilt
      rotationFactor={7}
      isRevese
      springOptions={{ stiffness: 300, damping: 20 }}
    >
      <div
        style={{ borderRadius: '12px' }}
        className="flex flex-col rounded-md p-5 border w-full overflow-hidden border-zinc-50/10"
      >
        {children}
      </div>
    </Tilt>
  );
}
