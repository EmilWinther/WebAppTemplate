// use https (http secure).
// http (non secure) will make the app complain about mixed content when running the app from Azure
const baseUrl = "https://template.com/templatedata"

Vue.createApp({
    data() {
        return {
            templatedata: [],
            addData: {  template1: 0,  template2: 0,  template3: 0 },
            addMessage: "",
        }
    },
    async created() {
        try {
            const response = await axios.get(baseUrl)
            this.templatedata = await response.data
            console.log(this.templatedata)
        } catch (ex) {
            alert(ex.message)
        }
    },
    methods: {
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.templatedata = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        getAllTemplateData() {
            this.helperGetAndShow(baseUrl)
        },
        async addTemplateData() {
            console.log(this.addData)
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllTemplateData()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")