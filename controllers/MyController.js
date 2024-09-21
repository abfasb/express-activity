const main = {
    createUser:(req, res) => {
        res.render('login', {title: 'Authentication', activePage: 'login' })
    },
    Home:(req, res) => {
        res.render('home', {title: 'Homepage', activePage: 'home' })
    },
    getFeature:(req, res) => {
        res.render('feature', { title: 'Services Page', activePage: 'feature' })
    },
    getHero:(req, res) => {
        res.render('hero', {title: 'About Page', activePage: 'hero' })
    },
    getPricing:(req, res) => {
        res.render('pricing', {title: 'Pricing Page', activePage: 'pricing' })
    }, 
}

module.exports = main;