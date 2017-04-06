
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


## Vue JS lynda App



### Data binding 

```js
<body>
    <div id="app">
        <h1>{{msg}}</h1>
        <!--NOT ALLOWED<a href="{{url}}">Home</a>-->
        <a v-bind:href="url + '?myParam=1'">Home</a>
         <p>
            <form action="">
                Name : <input type="text" :value="name" >
            </form>
        </p>
    </div>
   
</body>
<script>
   var vm =  new Vue({
        el : '#app',
        data : {
            msg : 'Hello Vue my Artdvp',
            url : 'https://www.google.com',
            name: 'artdvp'
        }
    });
</script>

//bind dom -> vm.name = 'aaa'
```

### Two way Data binding

```html
www.hplsusport.com

<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">
		
		<fieldset>
			<legend>Interests</legend>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Running"> Running
			</div>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Cycling"> Cycling
			</div>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Swimming"> Swimming
			</div>
		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>
		
		<p>You selected : {{selectedInterest.join(', ')}}</p>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   selectedInterest : []
	   }
	});
</script>
//lazy is unbound focus
```

## Applying control logic