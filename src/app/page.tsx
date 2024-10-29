import { BackgroundBeamsWithCollision } from '@/components/BackgroundCollision';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

/*
 * @Date: 2024-10-28 11:33:48
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 16:30:41
 * @Description:
 */
export default function Home() {
  return (
    <div className='z-0 flex h-full w-full flex-col pb-12'>
      <BackgroundBeamsWithCollision className='flex h-screen w-full flex-none flex-col items-center'>
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

        <div className='mt-20 grid grid-flow-col gap-8'>
          <Button size='lg' variant='secondary' className='text-lg font-bold'>
            <Link href='/stack/react'>Find Stacks</Link>
          </Button>
          <Button size='lg' className='text-lg font-bold'>
            <a href='https://github.com/LaughingZhu/StackHub' target='_blank'>
              Github
            </a>
          </Button>
        </div>
      </BackgroundBeamsWithCollision>
      <section id='community' className='pt-8 md:pt-16 lg:pt-24'>
        <div className='text-t3-purple-100 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
          <h3 className='text-t3-purple-50 mt-2 w-full text-left text-3xl font-bold tracking-tight md:text-center md:text-5xl lg:text-5xl'>
            Community
          </h3>
          <p className='text-t3-purple-200 mb-10 mt-4 w-full max-w-3xl text-left text-base md:text-center md:text-xl lg:text-xl'>
            Join our community to get help, share your projects, and even contribute to the project!
          </p>
          <div className='flex flex-col items-start justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0'>
            <a
              href='https://github.com/LaughingZhu/StackHub'
              target='_blank'
              rel='noopener noreferrer'
              className='border-t3-purple-200/20 bg-t3-purple-200/10 hover:border-t3-purple-300/50 hover:bg-t3-purple-200/20 w-full cursor-pointer rounded-lg border transition-colors hover:no-underline sm:h-64'
            >
              <div className='flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4'>
                <span className='icon-[logos--discord-icon] h-14 w-14'></span>
                <h2 className='text-xl font-black'>Discord</h2>
                <p className='text-center'>
                  Join our Discord server to chat with other developers and get help with your
                  projects.
                </p>
              </div>
            </a>
            <a
              href='https://github.com/LaughingZhu/StackHub'
              target='_blank'
              rel='noopener noreferrer'
              className='border-t3-purple-200/20 bg-t3-purple-200/10 hover:border-t3-purple-300/50 hover:bg-t3-purple-200/20 w-full cursor-pointer rounded-lg border transition-colors hover:no-underline sm:h-64'
            >
              <div className='flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4'>
                <span className='icon-[pajamas--github] h-14 w-14'></span>
                <h2 className='text-xl font-black'>GitHub</h2>
                <p className='text-center'>
                  Contribute to the project by submitting issues and pull requests on our GitHub
                  repository.
                </p>
              </div>
            </a>
            <a
              href='https://x.com/ZhuLaughing'
              target='_blank'
              rel='noopener noreferrer'
              className='border-t3-purple-200/20 bg-t3-purple-200/10 hover:border-t3-purple-300/50 hover:bg-t3-purple-200/20 w-full cursor-pointer rounded-lg border transition-colors hover:no-underline sm:h-64'
            >
              <div className='flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4'>
                <span className='icon-[logos--twitter] h-14 w-14'></span>
                <h2 className='text-xl font-black'>Twitter</h2>
                <p className='text-center'> Join us on Twitter for shitposts. </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
