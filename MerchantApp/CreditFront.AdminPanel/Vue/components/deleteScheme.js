
Vue.component("deletescheme", {
    template: '#deletescheme-template',
    props: ['itemid'],
    data: function () {
        return {
            error: '',
            item: {},
            id: ''
        };
    },
    methods: {
        setError: function (error) {
            console.log('Error!:\n' + error);
            this.error = error.Code || error;
        },
        getItem: function () {

        },
        deleteItem: function () {
            alert(item.Name + 'deleted');
            $('#deleteSchemeModal').modal("hide");
        }
    },
    beforeMount() {

    },
    mounted() {
        this.$root.$on('itemDelete', _item => {
            this.item = _item;
            $('#deleteSchemeModal').modal("show");
        });
    }
});