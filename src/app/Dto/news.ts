export interface Articles{
  "source": {
    "id": string;
    "name": string;
  };
  "author": string;
  "title": string;
  "description": string;
  "url": string;
  "urlToImage": string;
  "publishedAt": string;
  "content": string;
}

export interface newsDto{
  "status": string,
  "totalResults": number,
  "articles": Articles[]
}
