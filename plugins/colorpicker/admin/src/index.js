import pluginPkg from '../../package.json';
import { ColorPicker } from './containers';
import pluginId from './pluginId';

export default strapi => {

  const pluginDescription = 'A color picker for Strapi';

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon: pluginPkg.strapi.icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: pluginPkg.strapi.required || false,
    mainComponent: null,
    name: pluginPkg.strapi.name,
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };

  strapi.registerField({ type: 'colorpicker', Component: ColorPicker });

  return strapi.registerPlugin(plugin);
};
