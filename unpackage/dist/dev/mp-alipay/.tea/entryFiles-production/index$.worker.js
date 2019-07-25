if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../components/index/swiper');
require('../../components/index/stars');
require('../../components/index/praise');
require('../../components/index/hot');
require('../../components/search/search');
require('../../pages/index/index');
require('../../pages/search/search');
require('../../pages/me/me');
require('../../pages/movie/movie');
require('../../pages/cover/cover');
require('../../pages/registLogin/registLogin');
require('../../pages/meInfo/meInfo');
require('../../pages/meFace/meFace');
require('../../pages/faceCrop/faceCrop');
require('../../pages/meNickname/meNickname');
require('../../pages/meBirthday/meBirthday');
require('../../pages/sex/sex');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}