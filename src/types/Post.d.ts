export type Post = {
  id: number;
  title: string;
  media?: Media[];
  lead_paragraph: string;
  headline?: {
    print_headline: string
  }
};
type MediaMeta = {
  url: string;
  width: number;
  height: number;
}

type MediaItem = {
  "media-metadata": MediaMeta[];
  type: string;
}

type Media = MediaItem[];

export type PostList = Post[];

export type PostListResponse = {
  results: PostList;
  num_results: number;
  status: 'OK' | 'ERROR';
};


export const { Post, Media };