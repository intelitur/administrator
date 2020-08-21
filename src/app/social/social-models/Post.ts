export class Post {
    constructor(
        public post_id: number,
        public post_id_FB: string,
        public website_id: number,
        public user_id: number,
        public creation_date: string,
        public publication_date: string,
        public update_date: string,
        public is_active: boolean,
        public is_posted: boolean,
        public like_count: number,
        public love_count: number,
        public haha_count: number,
        public wow_count: number,
        public sad_count: number,
        public angry_count: number,
      ) {}
}