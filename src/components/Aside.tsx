import { HomeIcon, Library, Search } from 'lucide-react'

export function Aside() {
  return (
    <aside className="w-72 p-6 bg-zinc-950">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <Library />
          Your library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hit Brasil
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hip Hop anos 90
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hip Hop 2000
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Eletronica
        </a>
      </nav>
    </aside>
  )
}
