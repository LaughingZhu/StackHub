/*
 * @Date: 2024-10-28 13:31:14
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 16:58:29
 * @Description:
 */
'use client';
import AsideData from '@/data/index';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Aside({ slug }: { slug: string }) {
  return (
    <aside className='hidden h-full w-[200px] flex-none flex-col justify-start overflow-y-auto py-4 md:flex'>
      {AsideData.map((item) => (
        <Link
          key={item.name}
          href={`/stack/${item.name}`}
          className={cn(
            'mt-1 flex w-full transform-gpu cursor-pointer flex-col items-start justify-start rounded-lg pl-4 text-xl leading-relaxed transition-all hover:bg-gray-900 hover:text-emerald-500',
            slug === item.name ? 'text-emerald-500' : '222'
          )}
        >
          <span className='inline-block w-full transition-all hover:translate-x-1'>
            {item.name}
          </span>
        </Link>
      ))}
    </aside>
  );
}
