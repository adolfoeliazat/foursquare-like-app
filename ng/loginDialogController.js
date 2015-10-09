(function () {
  angular.module('FourApp')
  .controller('LoginDialogController', function ($mdDialog, $auth, $state) {
    var self = this;

    self.hide   = function () {
      $mdDialog.hide();
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };

    self.message = 'hey there';

    self.providers = [
      { name : 'facebook' , icon : 'facebook.svg'},
      { name : 'google'   , icon : 'google.svg'},
      { name : 'Instagram', icon : 'instagram.svg'},
      { name : 'twitter'  , icon : 'twitter.svg'},
      { name : 'vkontakte', icon : 'vkontakte.svg'}
    ];

    self.login = function () {
      $auth.login(self.user)
      .then(function () {
        console.log('Logged in boys');
        $state.go('home');
        self.hide();
      })
      .catch(function (res) {

      });
    };

    self.authenticate = function (provider) {
      $auth.authenticate(provider)
      .then(function () {
        console.log('Authenticated boys');
        $state.go('home');
        self.hide();
      })
      .catch(function (res) {

      });
    }
  });
})();
