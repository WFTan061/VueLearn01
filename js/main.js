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
		]
	},
	methods:{
		addLink: function(){
			this.links.push(this.workLink);
			this.workLink = cleanForm;
		},
		deleteLink: function(index){
			this.links.splice(index,1);
		}
	}
})