import ObjectPath from 'sap/base/util/ObjectPath';

sap.ui.getCore().initLibrary({
  name: 'my.libraries.lib1',
  version: '1.0.0',
  noLibraryCSS: true,
});
const lib1: { [key: string]: unknown } = ObjectPath.get(
  'my.libraries.lib1',
) as { [key: string]: unknown };
