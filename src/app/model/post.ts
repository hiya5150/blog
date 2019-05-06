export class Post {
  id: number;
  title: string;
  body: string;
  author: string;
  created: Date;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.author = args.author;
      this.body = args.body;
      this.title = args.title;
      this.created = (args.created) ? args.created : new Date();

    }

  }
}

