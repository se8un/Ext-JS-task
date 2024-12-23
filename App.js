Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        title: 'Вход',
        width: 300,
        height: 200,
        layout: 'fit',
        modal: true,
        closable: false,
        items: [
            {
                xtype: 'form',
                bodyPadding: 10,
                defaultType: 'textfield',
                items: [
                    {
                        fieldLabel: 'Логин',
                        name: 'username',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Пароль',
                        name: 'password',
                        inputType: 'password',
                        allowBlank: false
                    }
                ],
                buttons: [
                    {
                        text: 'Вход',
                        formBind: true,
                        handler: function (btn) {
                            const form = btn.up('form').getForm()
                            const values = form.getValues()

                            // if (values.username === '1' && values.password === '1') {
                            if (values.username === 'admin' && values.password === 'padmin') {
                                Ext.Msg.alert('Успех', 'Добро пожаловать!')
                                btn.up('window').close()
                                createMainWindow() // Переход к главному окну
                            } else {
                                Ext.Msg.alert('Ошибка', 'Неверные логин или пароль.')
                            }
                        }
                    }
                ]
            }
        ]
    }).show()
})


function createMainWindow() {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            {
                region: 'north',
                xtype: 'toolbar',
                height: 80,
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                style: {
                    backgroundColor: '#60a2de',
                    color: 'white'
                },
                items: [
                    {
                        xtype: 'component',
                        html: '<h3 style="margin: 0; color: white;">Учёт товаров</h3>'
                    },
                    {
                        xtype: 'button',
                        text: 'Товары',
                        cls: 'toolbar-button',
                        handler: function () {
                            createProductsTab()
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Выход',
                        cls: 'toolbar-button',
                        handler: function () {
                            window.location.reload()
                        }
                    }
                ]
            },
            {
                region: 'center',
                xtype: 'tabpanel',
                itemId: 'mainTabPanel' // Контейнер для вкладок
            }
        ]
    })
}


function createProductsTab() {
    const tabPanel = Ext.ComponentQuery.query('#mainTabPanel')[0]
    if (!tabPanel) {
        return
    }

    const store = Ext.create('Ext.data.Store', {
        fields: ['id', 'name', 'description', 'price', 'quantity'],
        data: [
            {id: 1, name: 'Товар 1', description: 'Описание 1', price: 10.5, quantity: 5},
            {id: 2, name: 'Товар 2', description: 'Описание 2', price: 15.0, quantity: 0},
            {id: 3, name: 'Товар 3', description: 'Описание 3', price: 20.75, quantity: 8}
        ]
    })

    const newTab = tabPanel.add({
        title: 'Товары',
        closable: true,
        layout: 'border',
        items: [
            {
                region: 'north',
                xtype: 'form',
                bodyPadding: 10,
                layout: 'hbox',
                defaults: {margin: '0 10 0 0'},
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'ID',
                        name: 'filterId',
                        emptyText: 'Введите ID',
                        enableKeyEvents: true,
                        listeners: {
                            specialkey: function (field, e) {
                                if (e.getKey() === e.ENTER) {
                                    const idValue = field.getValue()
                                    store.clearFilter()
                                    if (idValue) {
                                        store.filter({
                                            property: 'id',
                                            value: parseInt(idValue, 10),
                                            exactMatch: true
                                        })
                                    }
                                }
                            }
                        }
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Описание',
                        name: 'filterDescription',
                        emptyText: 'Введите описание',
                        enableKeyEvents: true,
                        listeners: {
                            specialkey: function (field, e) {
                                if (e.getKey() === e.ENTER) {
                                    const descValue = field.getValue()
                                    store.clearFilter()
                                    if (descValue) {
                                        store.filterBy(function (record) {
                                            return record
                                                .get('description')
                                                .toLowerCase()
                                                .includes(descValue.toLowerCase())
                                        })
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            {
                region: 'center',
                xtype: 'grid',
                store: store,
                title: 'Список товаров',
                columns: [
                    {text: 'ID', dataIndex: 'id', flex: 1},
                    {
                        text: 'Имя',
                        dataIndex: 'name',
                        flex: 1,
                        renderer: function (value) {
                            return `<a href="#">${value}</a>`
                        }
                    },
                    {text: 'Описание', dataIndex: 'description', flex: 2},
                    {text: 'Цена', dataIndex: 'price', flex: 1},
                    {
                        text: 'Кол-во',
                        dataIndex: 'quantity',
                        flex: 1,
                        renderer: function (value, metaData) {
                            if (value === 0) {
                                metaData.tdCls = 'highlight-zero'
                            }
                            return value
                        }
                    }
                ],
                listeners: {
                    cellclick: function (view, cell, cellIndex, record, row, rowIndex, e) {
                        const column = view.panel.headerCt.getHeaderAtIndex(cellIndex)
                        if (column.dataIndex === 'name') {
                            openProductCard(record) // Передаём запись в карточку товара
                        }
                    }
                }
            }
        ]
    })
    tabPanel.setActiveTab(newTab)
}


function openProductCard(record) {
    const form = Ext.create('Ext.form.Panel', {
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            allowBlank: false // Обязательные поля
        },
        items: [
            {xtype: 'displayfield', fieldLabel: 'ID', name: 'id', value: record.get('id')},
            {xtype: 'textfield', fieldLabel: 'Имя', name: 'name', value: record.get('name'), readOnly: true},
            {
                xtype: 'textfield',
                fieldLabel: 'Цена',
                name: 'price',
                value: record.get('price'),
                validator: function (value) {
                    return /^\d+(\.\d{1,2})?$/.test(value) ? true : 'Введите неотрицательное число с плавающей точкой'
                }
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Кол-во',
                name: 'quantity',
                value: record.get('quantity'),
                minValue: 0
            }
        ],
        buttons: [
            {
                text: 'Отмена',
                handler: function () {
                    form.up('window').close()
                }
            },
            {
                text: 'Сохранить',
                handler: function () {
                    const values = form.getValues()
                    const grid = Ext.ComponentQuery.query('grid')[0]
                    const store = grid ? grid.getStore() : null

                    if (!grid || !store) {
                        Ext.Msg.alert('Ошибка', 'Не удалось обновить данные в таблице.')
                        return
                    }

                    // Преобразуем значения в числовые форматы
                    const updatedPrice = parseFloat(values.price)
                    const updatedQuantity = parseInt(values.quantity, 10)

                    // Проверяем изменения
                    if (record.get('price') !== updatedPrice || record.get('quantity') !== updatedQuantity) {
                        Ext.Msg.alert('Изменение данных', 'Данные были изменены!')

                        // Обновляем запись
                        record.set({
                            price: updatedPrice,
                            quantity: updatedQuantity
                        })
                    }
                    form.up('window').close()
                }
            }
        ]
    })

    Ext.create('Ext.window.Window', {
        title: 'Карточка товара',
        modal: true,
        layout: 'fit',
        items: [form]
    }).show()
}
