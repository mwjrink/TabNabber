const multipleEntry = require('react-app-rewire-multiple-entry')([
    {
        entry: 'src/entry.tsx',
        outPath: '/Manager.html',
    },
]);

module.exports = {
    webpack: function(config, env) {
        multipleEntry.addMultiEntry(config);
        return config;
    },
};
