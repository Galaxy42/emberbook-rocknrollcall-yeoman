var Rocknrollcall = window.Rocknrollcall = Ember.Application.create();
Rocknrollcall.applicationName = "Rock n' Roll Call";

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
