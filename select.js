
YUI.add('select', 
    function (Y) {
        Y.Select = Y.Base.create('select', Y.Widget, [], 
            {
                renderUI: function() {
                    this.get('contentBox').append(`
                        <select ${this.get('multiple') ? 'multiple' : ''}>
                            ${this.get('items').map(item => `<option>${item}</option>`)}
                        </select>
                    `);
                }
            },
            {
                ATTRS: {
                    items: {
                        value: []
                    },
                    multiple: {
                        value: false
                    }
                }
            }
        );
    }, 
    '0.1',
    {
        requires: ['base-build', 'node', 'widget']
    }
);

YUI().use('select', function (Y) {

    let items = [];

    for (let i = 1; i <= 100; i++) {
        items.push(`Item #${i}`);
    }

    new Y.Select({ 
        items, 
        multiple: true, 
        srcNode: '#select'
    }).render();
});
