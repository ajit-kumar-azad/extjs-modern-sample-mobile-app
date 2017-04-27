/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    layout: 'vbox',

    items: [
        {
            xtype: 'titlebar',
            title: 'ABC Corp - Visit',
            titleAlign: 'center',   //BUG: doc says 'center' is the default value
            docked: 'top',
            items: [
                {
                    iconCls: 'x-fa fa-bars',
                    align: 'left'
                },
                {
                    iconCls: 'x-fa fa-bell-o',
                    align: 'right'
                }
            ]
        },
        // {
        //     xtype: 'togglefield',
        //     label: 'Done with the visit?',
        //     labelWidth: 200
        // },
        {
            xtype: 'containerfield',
            height: 80,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'component',
                    html: 'Done with this customer visit?',
                    cls: 'visit-text',
                    flex: 1
                },
                {
                    xtype: 'togglefield',
                    width: 100
                }
            ]
        },
        {
           xtype: 'cartesian',
           height: 250,
           // insetPadding: 10,
           captions: {
                title: {
                    text: 'ABC Corp - Order Summary',
                    style: {
                        fontSize: 18,
                        fillStyle: '#2196f3'
                    }
                },
                subtitle: {
                    text: 'month-wise (in million USD)',
                    style: {
                        fontSize: 14,
                        fillStyle: '#64b5f6'
                    }
                }
           },
           store: {
               fields: ['name', 'data1'],
               data: [{
                   name: 'Nov 16',
                   data1: 5
               }, {
                   name: 'Dec 16',
                   data1: 7
               }, {
                   name: 'Jan 17',
                   data1: 14
               }, {
                   name: 'Feb 17',
                   data1: 27
               }, {
                   name: 'Mar 17',
                   data1: 20
               }, {
                   name: 'Apr 17',
                   data1: 23
               }, {
                   name: 'May 17',
                   data1: 18
               }]
           },
           axes: [{
               type: 'numeric',
               position: 'left',
               fields: ['data1'],
               label: {
                fillStyle: '#2196f3'
               },
               // grid: true,
               minimum: 0,
               style: {
                strokeStyle: '#2196f3'
               }
           }, {
               type: 'category',
               position: 'bottom',
               fields: ['name'],
               label: {
                fillStyle: '#2196f3'
               },
               style: {
                strokeStyle: '#2196f3'
               }
           }],
           series: {
               type: 'area',
               subStyle: {
                   fill: ['#bbdefb'],
                   strokeStyle: ['#2196f3']
               },
               xField: 'name',
               yField: ['data1'],
               marker: {
                    type: 'circle',
                    radius: 5,
                    lineWidth: 2
                },
           }
        },
        {
            xtype: 'segmentedbutton',
            items: [
                {
                    text: 'Follow Ups',
                    iconCls: 'x-fa fa-calendar-o',
                    iconAlign: 'top',
                    flex: 1
                },
                {
                    text: 'Notes',
                    iconCls: 'x-fa fa-sticky-note-o',
                    iconAlign: 'top',
                    flex: 1
                },
                {
                    text: 'Location',
                    iconCls: 'x-fa fa-map-marker',
                    iconAlign: 'top',
                    flex: 1
                },
                {
                    text: 'Reports',
                    pressed: true,
                    iconCls: 'x-fa fa-files-o',
                    iconAlign: 'top',
                    flex: 1
                }
            ]
        },
        
        {
            xtype: 'mainlist',
            flex: 1
        }
    ]
});
