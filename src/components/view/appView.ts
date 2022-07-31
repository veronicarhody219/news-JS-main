import News from './news/news';
import Sources from './sources/sources';
import { NewsData } from './news/news';
import { SourceData } from './sources/sources';


export class AppView {
    public news: Object
    public sources: Object
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: SourceData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourceData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
