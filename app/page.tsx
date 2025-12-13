import Link from "next/link";
import GlassButton from "./components/GlassButton";
import Blobs from './components/home/BlobsComponent'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col relative overflow-hidden">
      <Blobs/>
      <div className="text-center animate-flip-down animate-once animate-ease-out animate-delay-200 z-5">
        <h1 className="font-code text-7xl max-sm:text-4xl font-bold tracking-tighter text-shadow-lg ">Welcome to Planex</h1>
        <h2 className="font-code text-2xl max-sm:text-lg tracking-wide text-shadow-md ">Plan your own projects!</h2>
      </div>
        <Link className="font-code font-bold text-1xl max-sm:scale-80" href="/panel">
          <GlassButton className="m-8 animate-once animate-delay-800 animate-duration-1000 animate-ease-out animate-fade z-5">
            Get started!
          </GlassButton>
        </Link>
    </main>
  );
}
