import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'tailwindcss/tailwind.css';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.append(modalRoot);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  themes: {
    default: 'Blue',
    list: [
      { name: 'Blue', class: '', color: '#3bc0f9' },
      { name: 'Dark', class: 'theme--dark', color: '#222222' },
    ],
  },
};
