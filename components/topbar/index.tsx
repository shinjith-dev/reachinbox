import ThemeSwitch from "./theme-switch";
import WSSwitch from "./ws-switch";

export default function Topbar() {
  return (
    <header className="flex justify-between border border-l-0 border-border-1 bg-surface-alt p-6 transition-all">
      <h4 className="font-bold">Onebox</h4>

      <div className="flex gap-4">
        <ThemeSwitch />
        <WSSwitch />
      </div>
    </header>
  );
}
