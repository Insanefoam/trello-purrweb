const columns = [
  {
    columnId: 0,
    title: 'TODO',
  },
  {
    columnId: 1,
    title: 'In progress',
  },
  {
    columnId: 2,
    title: 'Testing',
  },
  {
    columnId: 3,
    title: 'Done',
  },
];

const comments = [
  {
    author: 'John Doe',
    cardId: 1,
    commentId: 1,
    name: 'Testing comment 1',
  },
  {
    author: 'John Doe',
    cardId: 2,
    commentId: 2,
    name: 'Testing comment 2',
  },
  {
    author: 'John Doe',
    cardId: 2,
    commentId: 3,
    name: 'Testing comment 3',
  },
];

const cards = [
  {
    author: 'John Doe',
    cardId: 1,
    columnId: 0,
    description: 'Mock description 1',
    name: 'Testing card 1',
  },
  {
    author: 'John Lennon',
    cardId: 2,
    columnId: 1,
    description: 'Mock description 2',
    name: 'Testing card 2',
  },
];

export default { columns, cards, comments };
