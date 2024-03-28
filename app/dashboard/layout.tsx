export default function Dashboard({
  analytics,
  team,
}: {
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {analytics}
      {team}
    </div>
  );
}
