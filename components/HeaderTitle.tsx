export default function HeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-center font-serif my-10">
      {children}
    </h3>
  );
}
