import AppLoader from './appLoader';
import { NewsData } from './../view/news/news';
class AppController extends AppLoader {
    getSources(callback: () => Object): void {
        super.getResp<NewsData>(
            {
                endpoint: 'sources',
                options: {
                    sources: 'sourceId',
                },
            },
            callback
        );
    }

    getNews(e: Event, callback: () => Object) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<{ articles: NewsData[] }>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (!target.parentNode) {
                break;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
