interface Book {
  name: string;
  pages: number;
  author: string;
  publisher: string;
}

type SubBook = Pick<Book, "name" | "author">;

export {};
