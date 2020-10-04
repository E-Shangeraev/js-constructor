import image from './assets/1.png';
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks';

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas a ipsum veritatis. Odit nam excepturi maiores totam corporis itaque quae neque similique tempora saepe? Ab debitis, vitae natus nam explicabo quas odit exercitationem architecto facere at, eaque voluptatibus. Autem odio temporibus natus nobis minus modi consequatur, ex necessitatibus officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas a ipsum veritatis. Odit nam excepturi maiores totam corporis itaque quae neque similique tempora saepe? Ab debitis, vitae natus nam explicabo quas odit exercitationem architecto facere at, eaque voluptatibus. Autem odio temporibus natus nobis minus modi consequatur, ex necessitatibus officia.';

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #6f1265, #8440b5, #e66aa0, #8440b5, #6f1265)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
      
    }
  }),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
      padding: '2rem 0'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Изображение'
  }),
  new TextBlock('Some text', {
    styles: {
      'font-size': '22px',
      'text-align': 'center'
    }
  }),
  new ColumnsBlock([text, text, text], {
    styles: {
      // 'background-color': '#55a4ff',
      // border: '3px dashed #0055ff',
      // 'border-radius': '15px',
      // height: '300px'
    }
  })  
];