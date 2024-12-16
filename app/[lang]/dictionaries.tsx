import 'server-only'

const dictionaries: { [key: string]: () => Promise<any> } = {
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<any> => dictionaries[locale]()

// import 'server-only'
 
// const dictionaries = {
//   vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
//   en: () => import('@/dictionaries/en.json').then((module) => module.default),
// }
 
// export const getDictionary = async (locale) => dictionaries[locale]()