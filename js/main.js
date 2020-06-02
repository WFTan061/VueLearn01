var cleanForm = {
	name:"",
	iconPath:"",
	linkPath:"",
	dataCreated:"",
}
app = new Vue({
	el:"#app",
	data:{
		links:[
			{
				name:"test1",
				iconPath:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
				linkPath:"https://www.google.com/search?q=insert+css+in+html&rlz=1C1CHBF_enSG892SG892&oq=insert+css+in+html&aqs=chrome..69i57j0l7.6727j0j7&sourceid=chrome&ie=UTF-8",
				dateCreated:"dsgsdag",
			},
			{
				name:"adsgsdgds",
				iconPath:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
				linkPath:"https://www.google.com/search?q=insert+css+in+html&rlz=1C1CHBF_enSG892SG892&oq=insert+css+in+html&aqs=chrome..69i57j0l7.6727j0j7&sourceid=chrome&ie=UTF-8",
				dateCreated:"asdgasdgdsg",
			},
		],
		workLink:{
			name:"",
			iconPath:"",
			linkPath:"",
			// dataCreated:"",
		},
		testData:"Welcome!",
		fields:[
			{
				key:'name',
			},
			{
				key:'iconPath',
			},
			{
				key:''
			}
		],
		editing:false,
		toEdit:-1,
	},
	methods:{
		addLink: function(){
			let theDate = new Date();
			this.links.push({...this.workLink,dateCreated:theDate});
			this.workLink = cleanForm;
		},
		deleteLink: function(index){
			this.links.splice(index,1);
		},
		toEditLink: function(index){
			this.editing = true
			this.toEdit = index;
			this.workLink = {...this.links[this.toEdit]};
		},
		cancelEdit:function(){
			this.editing = false;
		},
		editLink:function(){
			this.links[this.toEdit] = {...this.workLink,dateCreated:this.links[this.toEdit].dateCreated};
			this.editing = false;
			this.workLink = cleanForm;
		}
	}
})