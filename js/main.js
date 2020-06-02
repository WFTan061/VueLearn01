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
				iconPath:"http://",
				linkPath:"dsagsdg",
				dateCreated:"dsgsdag",
			},
			{
				name:"adsgsdgds",
				iconPath:"asdgasdg",
				linkPath:"sdagsdg",
				dateCreated:"asdgasdgdsg",
			},
		],
		workLink:{
			name:"",
			iconPath:"",
			linkPath:"",
			dataCreated:"",
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
			this.links.push(this.workLink);
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
			this.links[this.toEdit] = {...this.workLink};
			this.editing = false;
			this.workLink = cleanForm;
		}
	}
})