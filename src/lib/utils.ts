/*
 * @Date: 2024-10-28 11:34:04
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 14:25:27
 * @Description:
 */
import { Data, DataItem } from '@/types/data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (number?: number) => {
  if (typeof number !== 'number') return 0;
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1) + 'M'; // 百万
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1) + 'K'; // 千
  } else {
    return number.toString(); // 小于千的直接返回
  }
};

export function formatDataByCategory(data: DataItem[]) {
  const map = new Map<string, Data>();
  data.forEach((item) => {
    map.set(item.category, {
      name: item.category,
      children: [...(map.get(item.category)?.children || []), item]
    });
  });

  return [...map.values()];
}
