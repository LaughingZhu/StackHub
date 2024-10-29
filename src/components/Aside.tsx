/*
 * @Date: 2024-10-28 13:31:14
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 15:03:09
 * @Description:
 */
'use client';
import AsideData from '@/data/index';
import Link from 'next/link';

export default function Aside() {
  return (
    <aside className='ld:w-[240px] hidden h-full w-[220px] flex-none flex-col justify-start overflow-auto py-2 md:flex'>
      {AsideData.map((item) => (
        <div key={item.name} className='flex w-full flex-col items-start justify-start'>
          <Link
            href={`/stack/${item.name}`}
            className='w-full transform-gpu cursor-pointer text-xl transition-all hover:translate-x-1 hover:text-emerald-500'
          >
            {item.name}
          </Link>
        </div>
      ))}
      {/* {[1, 2, 3, 4, 5, 23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2].map((item, index) => (
        <div key={index} className='flex w-full flex-col items-start justify-start'>
          <Link
            href=''
            className='w-full transform-gpu cursor-pointer text-xl transition-all hover:translate-x-1 hover:text-emerald-500'
          >
            {item}
          </Link>
        </div>
      ))}
      {[1, 2, 3, 4, 5, 23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2].map((item, index) => (
        <div key={index} className='flex w-full flex-col items-start justify-start'>
          <Link
            href=''
            className='w-full transform-gpu cursor-pointer text-xl transition-all hover:translate-x-1 hover:text-emerald-500'
          >
            {item}
          </Link>
        </div>
      ))} */}
    </aside>
  );
}
