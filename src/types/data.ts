/*
 * @Date: 2024-10-28 15:36:46
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 13:57:33
 * @Description:
 */

export interface DataItem {
  name: string;
  desc_zh: string;
  home: string;
  category: DateCategory;
  repoInfo: {
    github: string;
    stars: string;
    forks: string;
    logo: string;
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
  Server = 'Server'
}
