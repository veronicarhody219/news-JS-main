import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsData } from '../view/news/news';
import { SourceData } from '../view/sources/sources';

class App {
    constructor(public controller = new AppController(), public view = new AppView()) {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLElement;

        sources.addEventListener('click', (e: Event) =>
            this.controller.getNews<SourceData>(e, (data: SourceData) => this.view.drawNews(data))
        );
        this.controller.getSources<SourceData>((data: SourceData) => this.view.drawSources(data));
    }
}

export default App;
