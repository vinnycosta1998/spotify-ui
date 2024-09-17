import Image from 'next/image'
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipBack,
  Shuffle,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2
} from 'lucide-react'
import albumImg from '../assets/pop-smoke.jpg'
import albumImg2 from '../assets/funk-image.jpeg'
import albumImg3 from '../assets/ja-rule-image.jpeg'
import albumImg4 from '../assets/nba-image.jpeg'
import albumImg5 from '../assets/turma-do-pagode-image.jpeg'
import albumImg6 from '../assets/youngboy-image.jpg'
import { Footer } from '@/components/Footer'
import { Aside } from '@/components/Aside'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
