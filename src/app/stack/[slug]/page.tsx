/*
 * @Date: 2024-10-28 15:08:09
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 15:23:20
 * @Description:
 */
import Aside from '@/components/Aside';
import STACK_DATA from '@/data';
import { formatDataByCategory } from '@/lib/utils';
import StackItem from '../item';
interface Params {
  slug: string; // 指定 slug 参数的类型
}

export default async function Stack({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const stacks = STACK_DATA.find((item) => item.name === slug);
  const formatStacks = formatDataByCategory(stacks?.children || []);
  return (
    <>
      <Aside />
      <div className='screen- flex flex-auto overflow-y-auto overflow-x-hidden'>
        {!stacks ? (
          <div>null</div>
        ) : (
          <div className='flex w-full flex-col items-start justify-start'>
            {formatStacks.map((item) => (
              <div key={item.name}>
                <h2 className='my-4 text-xl font-bold'>{item.name}</h2>
                <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
                  {item.children.map((child) => (
                    <StackItem key={child.name} item={child} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
