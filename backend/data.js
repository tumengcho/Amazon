import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mbacké',
      email: 'mbacke@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jonh',
      email: 'jonh@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Quarter Punder BLT',
      slug: 'quarter-punder-blt',
      price: 14.99,
      description:
        ' This delicious piece of meat is the exact thing you need for your next meal',
      image: '/Images/41c39ed8bc4e49830d7d3911af5196e0-removebg-preview.png',
      category: 'Burger',
    },

    {
      name: 'Crispy Hamburger',
      slug: 'crispy-hamburger',
      price: 9.99,
      description:
        ' Our brand new Crispy Hamburger made with the best ingredients. Try it now.',
      image: '/Images/hamburger-removebg-preview.png',
      category: 'Burger',
    },

    {
      name: 'Mega Cheesy',
      slug: 'mega-cheesy',
      price: 19.99,
      description:
        ' You like it when its big and cheesy? Well this is the solution to your problem. ',
      image: '/Images/hamb2-removebg-preview.png',
      category: 'Burger',
    },

    {
      name: 'VeganS Special',
      slug: 'vagans-special',
      price: 14.99,
      description:
        ' Made with 100% vegan meat, you can eat it in peace if you are vegan.',
      image: '/Images/he199-removebg-preview.png',
      category: 'Burger',
    },
  ],
};

export default data;
