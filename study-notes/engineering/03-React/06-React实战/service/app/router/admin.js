'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.main.index);
};
