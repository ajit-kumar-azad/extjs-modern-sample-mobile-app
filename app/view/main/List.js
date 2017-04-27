/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'App.store.Personnel'
    ],

    // title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        // { 
        //     text: 'Title',  
        //     dataIndex: 'title',
        //     width: 120
        // },
        { 
            text: 'Report Description', 
            dataIndex: 'desc',
            flex: 1
        },
        {              
            width: 80,
            cell: {
                xtype: 'button',
                iconCls: 'x-fa fa-file-pdf-o'
            }
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
