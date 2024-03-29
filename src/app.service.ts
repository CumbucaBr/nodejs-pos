import { Injectable } from '@nestjs/common';
import { Products } from './model';

@Injectable()
export class AppService {
  getProducts(): Products[] {
    return [
      {
        name: 'Grill Chicken Chop',
        description: 'chicken, egg, mushroom, salad',
        price: 10.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-1.jpg',
        category: ['All', 'Meat'],
      },
      {
        name: 'Grill Pork Chop',
        description: 'pork, egg, mushroom, salad',
        price: 12.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-2.jpg',
        category: ['All', 'Meat'],
      },
      {
        name: 'Capellini Tomato Sauce',
        description: 'spaghetti, tomato, mushroom',
        price: 11.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-3.jpg',
        category: ['All', 'Pasta'],
      },
      {
        name: 'Vegan Salad Bowl',
        description: 'apple, carrot, tomato',
        price: 6.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-4.jpg',
        category: ['All', 'Green'],
      },
      {
        name: 'Hawaiian Pizza',
        description: 'pizza, crab meat, pineapple',
        price: 20.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-5.jpg',
        category: ['All', 'Pizza'],
      },
      {
        name: 'Perfect Burger',
        description:
          'dill pickle, cheddar cheese, tomato, red onion, ground chuck beef',
        price: 8.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-17.jpg',
        category: ['All', 'Burger'],
      },
      {
        name: 'Avocado Shake',
        description: 'avocado, milk, vanilla',
        price: 3.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-6.jpg',
        category: ['All', 'Drinks'],
      },
      {
        name: 'Coffee Latte',
        description: 'expresso, milk',
        price: 2.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-7.jpg',
        category: ['All', 'Drinks'],
      },
      {
        name: 'Vita C Detox Juice',
        description: 'apricot, apple, carrot, and ginger juice',
        price: 2.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-8.jpg',
        category: ['All', 'Drinks'],
      },
      {
        name: 'Pancake',
        description: 'non dairy, egg, baking soda, sugar, all purpose flour',
        price: 5.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-9.jpg',
        category: ['All', 'Desserts'],
      },
      {
        name: 'Mushroom Soup',
        description:
          'evaporated milk, marsala wine, beef cubes, chicken broth, butter',
        price: 3.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-10.jpg',
        category: ['All', 'Green'],
      },
      {
        name: 'Baked Chicken Wing',
        description: 'chicken wings, a1 steak sauce, honey, cayenne pepper',
        price: 6.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-11.jpg',
        category: ['All', 'Meat'],
      },
      {
        name: 'Veggie Spaghetti',
        description: 'yellow squash, pasta, roasted red peppers, zucchini',
        price: 14.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-12.jpg',
        category: ['All', 'Pasta'],
      },
      {
        name: 'Vanilla ice cream',
        description: 'milk, cream, sugar',
        price: 4.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-13.jpg',
        category: ['All', 'Desserts'],
      },
      {
        name: 'Perfect Yeast Doughnuts',
        description: 'all purpose flour, eggs, milk, cream, sugar',
        price: 8.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-15.jpg',
        category: ['All', 'Desserts'],
      },
      {
        name: 'Macarons',
        description: 'almond flour, egg, sugar, food coloring',
        price: 4.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-14.jpg',
        category: ['All', 'Desserts'],
      },
      {
        name: 'Chantilly Cupcake',
        description: 'almond flour, sugar, milk, cream, food coloring',
        price: 6.99,
        image:
          'https://raw.githubusercontent.com/CumbucaBr/web-pos/main/images/product-16.jpg',
        category: ['All', 'Desserts'],
      },
    ];
  }
}
