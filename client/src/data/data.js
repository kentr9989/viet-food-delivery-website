import beefpho from '../assets/pho-beef.jpg';
import chickenpho from '../assets/pho-chicken.jpg';
import comtam from '../assets/com-tam.jpg';
import vegancomtam from '../assets/vegan-com-tam.jpg';
import banhmi from '../assets/banh-mi.jpg';
import veganbanhmi from '../assets/vegan-banh-mi.jpg';
import bunthitnuong from '../assets/bun-thit-nuong.jpg';
import veganbunthitnuong from '../assets/vegan-bun-thit-nuong.jpg';

export const foodTypes = [
  {
    name: 'Pho',
    linkName : 'pho',
    img: beefpho,
    id: crypto.randomUUID(),
  },
  {
    name: 'Broken rice',
    linkName : 'broken-rice',
    img: comtam,
    id: crypto.randomUUID(),
  },
  {
    name: 'Banh mi',
    linkName : 'banh-mi',
    img: banhmi,
    id: crypto.randomUUID(),
  },
  {
    name: 'Bun thit nuong',
    linkName : 'bun-thit-nuong',
    img: bunthitnuong,
    id: crypto.randomUUID(),
  },
];

// 24 foods (2 pho, 2 com tam, 2 banh mi, 2 bun thit nuong)
export const foods = [
  {
    name: 'Beef Pho',
    category: 'pho',
    img: beefpho,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Chicken Pho',
    category: 'pho',
    img: chickenpho,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Broken rice',
    category: 'broken-rice',
    img: comtam,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Vegan broken rice',
    category: 'broken-rice',
    img: vegancomtam,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Banh mi',
    category: 'banh-mi',
    img: banhmi,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Vegan banh mi',
    category: 'banh-mi',
    img: veganbanhmi,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Bun thit nuong',
    category: 'bun-thit-nuong',
    img: bunthitnuong,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: 'Bun thit nuong',
    category: 'bun-thit-nuong',
    img: veganbunthitnuong,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
];
