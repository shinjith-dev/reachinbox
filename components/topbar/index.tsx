import ThemeSwitch from "./theme-switch";
import WSSwitch from "./ws-switch";

export default function Topbar() {
  return (
    <header className="flex justify-between border border-l-0 border-[#343A40] bg-[#1F1F1F] p-6">
      <h4 className="font-bold">Onebox</h4>

      <div className="flex gap-4">
        <ThemeSwitch />
        <WSSwitch />
      </div>
    </header>
  );
}
