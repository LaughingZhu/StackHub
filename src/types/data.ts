/*
 * @Date: 2024-10-28 15:36:46
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-30 15:41:45
 * @Description:
 */

export interface DataItem {
  name: string;
  desc_zh: string;
  home: string;
  category: DateCategory;
  logo: string;
  repoInfo: {
    github: string;
    stars: string;
    forks: string;
    owner: string;
  };
}

export interface Data {
  name: string;
  children: DataItem[];
}

export enum DateCategory {
  Framework = 'Framework',
  Ui = 'Ui',
  Server = 'Server',
  Builder = 'Builder'
}
