import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/Button/Button'
import { WordChanger } from '@/components/WordChanger/WordChanger'


const inter = Inter({ subsets: ['latin'] })

export const ArrowSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.65609 11.2583L11.5061 7.4083C11.5644 7.34997 11.6058 7.28677 11.6303 7.21872C11.6544 7.15066 11.6665 7.07774 11.6665 6.99997C11.6665 6.92219 11.6544 6.84927 11.6303 6.78122C11.6058 6.71316 11.5644 6.64997 11.5061 6.59163L7.65609 2.74163C7.54914 2.63469 7.41556 2.57869 7.25534 2.57363C7.09473 2.56897 6.95609 2.62497 6.83942 2.74163C6.72275 2.84858 6.66189 2.98216 6.65684 3.14238C6.65217 3.30299 6.70817 3.44163 6.82484 3.5583L9.68317 6.41663H3.16442C2.99914 6.41663 2.8605 6.47244 2.7485 6.58405C2.63689 6.69605 2.58109 6.83469 2.58109 6.99997C2.58109 7.16524 2.63689 7.30369 2.7485 7.4153C2.8605 7.5273 2.99914 7.5833 3.16442 7.5833H9.68317L6.82484 10.4416C6.71789 10.5486 6.66189 10.6847 6.65684 10.85C6.65217 11.0152 6.70817 11.1514 6.82484 11.2583C6.93178 11.375 7.06789 11.4333 7.23317 11.4333C7.39845 11.4333 7.53942 11.375 7.65609 11.2583Z"
      fill="currentColor"
    />
  </svg>
)


export default function Home() {
  return (
    <main
      
      className={`${inter.className}`}
    >
      <header className='bg-black flex justify-between items-center w-full p-4 !md:p-12 py-4'>
      <div className="w-32 md:w-48 h-auto">
          <Image
            src="/img/logo-ve-orange.png"
            alt="logo-venta-empresa"
            width={180}
            height={40}
            priority
          />
        </div>

        <Button variant='primary' className='bg-orange rounded-0 !p-2 flex items-center'>
            <p>Ingresa o regístrate</p>
            <ArrowSvg className='w-4 h-4 ml-1'/>
        </Button>
      </header>
      {/* <div>
        <WordChanger />
      </div> */}
      <div className='h-[36rem]'>
        <div className='relative w-full h-full max-h-full max-w-full'>
          <div className='absolute top-0 left-0 w-full h-full z-10'>
              <div className='w-full h-full flex items-center justify-center flex-col gap-6'>
                <WordChanger />
                <p className='text-white font-bold text-center'>Cotiza online al mejor precio y asegura el éxito de tu negocio</p>
              </div>
          </div>
          <video 
            className='absolute top-0 left-0 object-cover object-center w-full h-full brightness-50' 
            src='/assets/video-bg.mp4' 
            autoPlay 
            muted 
            loop 
          />
        </div>
      </div>
    </main>
  )
}
