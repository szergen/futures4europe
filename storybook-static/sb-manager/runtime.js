import { Provider, renderStorybookUI } from './chunk-VCJ56UEM.js';
import {
  CHANNEL_CREATED,
  addons,
  createBrowserChannel,
} from './chunk-KCJCJECS.js';
import './chunk-TZAR34JC.js';
import './chunk-VMGB76WP.js';
import { scope } from './chunk-UOBNU442.js';
import './chunk-XP3HGWTR.js';
var ReactProvider = class extends Provider {
    constructor() {
      super();
      let channel = createBrowserChannel({ page: 'manager' });
      addons.setChannel(channel),
        channel.emit(CHANNEL_CREATED),
        (this.addons = addons),
        (this.channel = channel),
        (scope.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    }
    getElements(type) {
      return this.addons.getElements(type);
    }
    getConfig() {
      return this.addons.getConfig();
    }
    handleAPI(api) {
      this.addons.loadAddons(api);
    }
  },
  { document } = scope,
  rootEl = document.getElementById('root');
setTimeout(() => {
  renderStorybookUI(rootEl, new ReactProvider());
}, 0);
