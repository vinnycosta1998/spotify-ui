import Image from 'next/image';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import albumImg from '../assets/pop-smoke.jpg'
import albumImg2 from '../assets/funk-image.jpeg'
import albumImg3 from '../assets/ja-rule-image.jpeg'
import albumImg4 from '../assets/nba-image.jpeg'
import albumImg5 from '../assets/turma-do-pagode-image.jpeg'
import albumImg6 from '../assets/youngboy-image.jpg'



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 p-6 bg-zinc-950">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <Library/>
              Your library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hit Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hip Hop anos 90</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hip Hop 2000</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Eletronica</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/20 pr-1">
              <ChevronLeft/>
            </button>

            <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/20 pl-1">
              <ChevronRight/>
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
                <Play/>
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
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
              <Image
                src={albumImg3}
                alt=""
                width={104}
                height={104}
              />
              <strong>Veni Vetti Vici</strong>  
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
              <Image
                src={albumImg4}
                alt=""
                width={104}
                height={104}
              />
              <strong>Never broke Again Vol.2</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
              <Image
                src={albumImg5}
                alt=""
                width={104}
                height={104}
              />
              <strong>Turma do Pagode</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
              
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer">
              <Image
                src={albumImg6}
                alt=""
                width={104}
                height={104}
              />
              <span>Never Broke Again</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
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
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={albumImg5} alt="Imagem do album da turma do pagode" width={56} height={56}/>
          <div className="flex flex-col">
            <strong className="font-normal">
              Cobertor de orelha
            </strong>
            <span className="text-xs text-zinc-400">Turma do Pagode</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button className="">
              <Play/>
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
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
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-12 bg-zinc-200"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
        
      </footer>
    </div>
  );
}
