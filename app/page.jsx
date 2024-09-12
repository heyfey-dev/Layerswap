import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-[#101429] via-[#2f1136] to-[#101429] h-screen w-full">
      <div>
        <Logo />
        <h2>Layerswap</h2>
      </div>
    </main>
  );
}
