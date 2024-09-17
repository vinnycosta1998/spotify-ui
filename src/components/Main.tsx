import Image from 'next/image'
import albumImg from '../assets/funk-image.jpeg'
import albumImg1 from '../assets/hanz-zimmer.jpeg'
import albumImg2 from '../assets/ja-rule-image.jpeg'
import albumImg3 from '../assets/ludovico-einaudi.jpg'
import albumImg4 from '../assets/nba-image.jpeg'
import albumImg5 from '../assets/pop-smoke.jpg'
import albumImg6 from '../assets/turma-do-pagode-image.jpeg'

import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/20 pr-1">
          <ChevronLeft />
        </button>

        <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/20 pl-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem do album do pop smoke"
            width={104}
            height={104}
          />
          <strong>Meet the woo</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image
            src={albumImg2}
            alt="Imagem do album de funk"
            width={104}
            height={104}
          />
          <strong>Funk Vol.1</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image src={albumImg3} alt="" width={104} height={104} />
          <strong>Veni Vetti Vici</strong>
        </a>
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image src={albumImg4} alt="" width={104} height={104} />
          <strong>Never broke Again Vol.2</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image src={albumImg5} alt="" width={104} height={104} />
          <strong>Turma do Pagode</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
          <Image src={albumImg6} alt="" width={104} height={104} />
          <span>Never Broke Again</span>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>
      <h2 className="font-semibold text-2xl mt-10">Made for Vinicius Costa</h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem de album"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">Meet the woo</span>
        </a>

        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem de album"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">Meet the woo</span>
        </a>

        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem de album"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">Meet the woo</span>
        </a>

        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem de album"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">Meet the woo</span>
        </a>

        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 cursor-pointer">
          <Image
            src={albumImg}
            alt="Imagem de album"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">Meet the woo</span>
        </a>
      </div>
    </main>
  )
}
