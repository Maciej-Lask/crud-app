const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('05-12-2023'),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-10-2023'),
      author: 'John Kowalski',
      category: 'Sport',
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-12-1023'),
      author: 'Doe Doe',
      category: 'Movies',
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-12-2003'),
      author: 'Adam Doe',
      category: 'News',
    },
    {
      id: '5',
      title: 'Article title 5',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-07-2023'),
      author: 'John Doe',
      category: 'Music',
    },
    {
      id: '6',
      title: 'Article title 6',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-12-2023'),
      author: 'John Doe',
      category: 'Movies',
    }
  ],
  categories: ['News', 'Sport', 'Movies', 'Music'],
  selectedCategory: '',
};

export default initialState;
