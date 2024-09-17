import Image from 'next/image'
import albumImg5 from '../assets/turma-do-pagode-image.jpeg'
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={albumImg5}
          alt="Imagem do album da turma do pagode"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal">Cobertor de orelha</strong>
          <span className="text-xs text-zinc-400">Turma do Pagode</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div>
          <span className="text-xs text-zinc-400">0:34</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">4:48</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-12 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
