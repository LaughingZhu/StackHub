import { BackgroundBeamsWithCollision } from '@/components/BackgroundCollision';
import { Button } from '@/components/ui/button';

/*
 * @Date: 2024-10-28 11:33:48
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 12:21:59
 * @Description:
 */
export default function Home() {
  return (
    <BackgroundBeamsWithCollision className='flex h-full w-full flex-col items-center'>
      <h2 className='relative z-20 flex flex-col items-center font-sans text-4xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl'>
        The best way to find the stack.
        <div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
          <div className='absolute left-0 top-[1px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]'>
            <span className=''>Developer StackHub.</span>
          </div>
          <div className='relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent'>
            <span className=''>Developer StackHub.</span>
          </div>
        </div>
      </h2>

      <div className='mt-20 grid gap-4 sm:grid-flow-row md:grid-flow-col'>
        <Button>Documentation</Button>
        <Button>Github</Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
