import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e9c13b01bc9d4df0a4a193c9809ca032', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
