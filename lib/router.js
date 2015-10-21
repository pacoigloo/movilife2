Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'login'});
Router.route('/menu', {name: 'menu'});
Router.route('/global-home', {name: 'globalHome'});
Router.route('/factura', {name: 'factura'});
Router.route('/seleccion', {name: 'seleccion'});
Router.route('/ayudaventas', {name: 'ayudaventas'});
Router.route('/confirmacion', {name: 'confirmacion'});
Router.route('/poliza', {name: 'poliza'});
Router.route('/recordar', {name: 'recordar'});
Router.route('/registro', {name: 'registro'});