export class Article {
    id: Number | undefined;
    subtitle: String | undefined;
    unique_id: String | undefined;
    title: Title | undefined;
    page: Page | undefined;
    related_articles: Boolean | undefined;
    mapping: Boolean | null | undefined;
}

export class Title {
    id: Number | undefined;
    language: String | undefined;
    title: String | undefined;
    page_title: String | undefined;
    menu_title: String | undefined;
    slug: String | undefined;
    path: String | undefined;
    redirect: String | null | undefined;
    published: Boolean | null | undefined;
    page_id: Number | undefined;
}

export class Page {
    id: Number | undefined;
}