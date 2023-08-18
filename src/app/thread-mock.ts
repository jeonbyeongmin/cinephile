import type { Thread } from '@/types/threads';

export const threadsMock: Thread[] = [
  {
    id: 't1',
    channelID: 'c1',
    movieTitle: 'The Shawshank Redemption',
    moviePoster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
    repImage: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    repReply: {
      id: 't2',
      channelID: 'c19',
      movieTitle: 'The Godfather',
      moviePoster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc,
                vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam,
                nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc,
                vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam,
                nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
      repImage: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      createdAt: '2021-01-01T00:00:00.000Z',
      author: {
        id: 'u2',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
    },
    createdAt: '2021-01-01T00:00:00.000Z',
    author: {
      id: 'u1',
      avatar: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    },
  },
  {
    id: 't2',
    channelID: 'c2',
    movieTitle: 'The Godfather',
    moviePoster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
    repImage: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    createdAt: '2021-01-01T00:00:00.000Z',
    author: {
      id: 'u2',
      avatar: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    },
  },
  {
    id: 't3',
    channelID: 'c3',
    movieTitle: 'Everything Everywhere All at Once',
    moviePoster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
    repImage: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    createdAt: '2021-01-01T00:00:00.000Z',
    author: {
      id: 'u3',
      avatar: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    },
  },
  {
    id: 't4',
    channelID: 'c4',
    movieTitle: 'The Dark Knight',
    moviePoster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
    repImage: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    createdAt: '2021-01-01T00:00:00.000Z',
    author: {
      id: 'u4',
      avatar: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
  },
  {
    id: 't5',
    channelID: 'c5',
    movieTitle: 'The Godfather: Part II',
    moviePoster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc, 
              vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget tempor aliquam, 
              nunc libero ultricies nunc, vitae aliquam nisl nunc vitae nisl.`,
    repImage: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    createdAt: '2021-01-01T00:00:00.000Z',
    author: {
      id: 'u5',
      avatar: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
  },
];
