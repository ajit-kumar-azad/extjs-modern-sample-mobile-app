Ext.define('App.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'title', 'desc', 'phone'
    ],

    data: { items: [
        { title: 'Last visit notes', desc: "Consolidated last visit notes.", phone: "555-111-1111" },
        { title: 'Pricing Sheet',     desc: "Customer specific pricing detail",  phone: "555-222-2222" },
        { title: 'About ABC Corp',   desc: "Know about the company before visit",    phone: "555-333-3333" },
        { title: 'Product Catalog',     desc: "Product catalog relevant to ABC Corp",        phone: "555-444-4444" },
        { title: 'Product Catalog',     desc: "Competitor analysis report",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
