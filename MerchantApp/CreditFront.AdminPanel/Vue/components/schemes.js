
Vue.component("schemes", {
    template: '#schemes-template',
    props: ['password'],
    data: function () {
        return {
            error: '',
            offset: 0,
            count: 10,
            searchQuery: '',
            items: []
        };
    },
    methods: {
        setError: function (error) {
            console.log('Error!:\n' + error);
            this.error = error.Code || error;
        },
        getItems: function () {
            var vue = this;
            $.post("/SchemeApi/GetItems",
                { offset: this.offset, count: this.count, searchQuery: this.searchQuery }).then(function (r) {
                    if (!r.Error) {
                        vue.items = r.Data;
                    }
                    else {
                        vue.setError(r.Error);
                    }
                });
        },
        editScheme: function (item) {
            //console.log(item);
            console.log(item.Id);
            this.$root.$emit('itemSelected', item);
            //this.selecteditem = item;

            //window.location.replace("/Cabinet/SchemeDetails/" + item.id);
        },
        deleteScheme: function (item) {
            //window.location.replace("/Cabinet/SchemeDetails/" + id);
            console.log("deleting " + item.Id);
            this.$root.$emit('itemDelete', item);
        }   
        
    },
    beforeMount() {
        this.getItems();
    }
});