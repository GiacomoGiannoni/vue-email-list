var app = new Vue(
    {
        el: '#app',
        data: {
            listaEmail: [],
        },
        methods: {
        },
        mounted: function() {

            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result)=> {
                    this.email = result.data.response;
                    this.listaEmail.push(this.email);
                });
            }
            
        },
    }
);