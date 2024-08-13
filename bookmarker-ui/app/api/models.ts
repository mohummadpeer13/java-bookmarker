export interface BookmarksList {
  currentPage: number;
  data: Bookmark[];
  totalElements: number;
  pageNumber: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface Bookmark {
  id: number;
  title: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  description: string;
}
