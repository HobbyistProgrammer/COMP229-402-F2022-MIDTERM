export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
export function DisplayBookListPage(req, res, next) {
    res.render('index', { title: 'List', page: 'list' });
}