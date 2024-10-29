/*
 * @Date: 2024-10-28 15:30:29
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 15:23:28
 * @Description:
 */
import { AvatarLogo } from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { DataItem } from '@/types/data';
import Link from 'next/link';

export default async function StackItem({ item }: { item: DataItem }) {
  return (
    <>
      <div
        key={item.name}
        className='shadow-medium transition-transform-background relative box-border flex h-auto flex-col overflow-hidden rounded-2xl bg-[#18181b] text-foreground outline-none'
      >
        <div className='overflow-inherit color-inherit rounded-t-large z-10 flex w-full shrink-0 items-center justify-between p-3 subpixel-antialiased'>
          <div className='flex gap-5'>
            <AvatarLogo img={item.repoInfo?.logo} name={item.name} />
            <div className='flex flex-col items-start justify-center gap-1'>
              <h4 className='text-small text-default-600 font-semibold leading-none'>
                {item.name}
              </h4>
              <h5 className='text-small text-default-400 tracking-tight'>{item.repoInfo?.owner}</h5>
            </div>
          </div>
          <Link href={item.home}>
            <Button
              className={
                'items-center rounded-full bg-[#006fee] px-3 text-white hover:bg-[#1e69be]'
              }
              size='sm'
            >
              Visit
            </Button>
          </Link>
        </div>
        <div className='place-content-inherit align-items-inherit text-small text-default-400 relative flex h-auto w-full flex-auto flex-col overflow-y-auto break-words p-3 px-3 py-0 text-left subpixel-antialiased'>
          <p>{item.desc_zh}</p>
        </div>
        <div className='color-inherit rounded-b-large flex h-auto w-full items-center gap-3 overflow-hidden p-3 subpixel-antialiased'>
          <div className='flex gap-1'>
            <p className='text-default-400 text-small font-semibold'>{item.repoInfo?.stars}</p>
            <p className='text-default-400 text-small'>Stars</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-default-400 text-small font-semibold'>{item.repoInfo?.forks}</p>
            <p className='text-default-400 text-small'>Forks</p>
          </div>
        </div>
      </div>
    </>
  );
}
