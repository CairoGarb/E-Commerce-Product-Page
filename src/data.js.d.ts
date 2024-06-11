// data.d.ts
declare module './data' {
  interface DataItem {
    id: number;
    mainImage: string;
    thumbnail: string;
  }

  export const data: DataItem[];
}
