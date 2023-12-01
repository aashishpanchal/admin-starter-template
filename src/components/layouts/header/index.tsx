import { LuChevronFirst as Menu } from "react-icons/lu";

type Props = {
  open: boolean;
  toggle: (value?: boolean) => void;
};

export default function RootHeader({ toggle, open }: Props) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 gap-4 px-4 border-b bg-white/75 backdrop-blur-md border-zinc-300/25">
      {open && (
        <Menu
          size={24}
          onClick={() => toggle()}
          className="rotate-180 cursor-pointer"
        />
      )}
    </header>
  );
}
