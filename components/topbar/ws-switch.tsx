import Image from "next/image";

export default function WSSwitch() {
  return (
    <div className="flex gap-2">
      <h5 className="text-sm font-semibold">Tim's Workspace</h5>

      <Image
        src="/icons/arrow-down.png"
        alt="arrow down"
        height={16}
        width={16}
        className="object-contain object-center"
      />
    </div>
  );
}
