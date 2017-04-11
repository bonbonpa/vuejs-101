
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


## Vue JS lynda App



### 1-1 Data binding 

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

### 1-2 Two way Data binding

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

### 1-3 Applying control logic

subscribe.html

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">
		
		<fieldset>
			<legend>Interests</legend>
			<div v-for="interest in interests">
				<input v-model="selectedInterest" type="checkbox" :value="interest"> {{interest}}
			</div>
			
		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>
		
		<p v-show="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-if="selectedInterest.length == 3">You must be very active!</p>
		<p v-else-if="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-else>You please select one lease</p>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   interests : ['Running','Cycling','Swimming'],
		   selectedInterest : []
	   }
	});
</script>
```
```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">
		
		<fieldset>
			<legend>Interests</legend>
			<div v-for="(interest,index) in interests">
				<input v-model="selectedInterest" type="checkbox" :value="interest.id"> {{interest.name}}
			</div>
			
		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>
		
		<p v-show="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-if="selectedInterest.length == 3">You must be very active!</p>
		<p v-else-if="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-else>You please select one lease</p>
		
		<div v-for="(value,key,index) in address">
		   {{index + 1}}. {{key}} : {{value}}
		</div>
		<div v-for="i in 10">{{i}}</div>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   interests : [
		       {
		           id: 1,
		           name : 'Running'
		       },
		       {
		           id: 2,
		           name : 'Cycling'
		       },
		       {
		           id: 3,
		           name : 'Swimming'
		       }],
		   selectedInterest : [],
		   address : {
		       street :'100 Broadway',
		       city : 'New York',
		       state : 'NY'
		   }
	   }
	});
</script>
        
```

### 1-4 Event handling

login.html
```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">    
	<button v-on:click="msg = 'Welcome!'">Log in</button>        
	{{msg}}    
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           msg: ''           
       },
       methods : {
           logIn : function(){
               this.msg = 'Welcome!'
           }
       }
    });
</script>
        
```

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">    
	<button v-if="!loggedIn" v-on:click="logIn('Mike')">Log in</button>
	<button v-else v-on:click.prevent="logOut">Log out</button>
	{{msg}}    
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           msg: '' ,
           loggedIn : false
       },
       methods : {
           logIn : function(username,event){
               //event.preventDefault();
               this.loggedIn = true;
               this.msg = 'Welcome ' + username ;
           },
           logOut : function() {
               this.loggedIn = false;
               this.msg = 'So long!';
           }
       }
    });
</script>
```

### 1-5 Binding to the style attribute

```html
<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <div :style="{border : 'solid 2px black', 'margin-bottom': '30px' , fontSize : myFontSize + 'px' }">
        JS object lteral bound to style attribute
    </div>
    <div :style="fancyDiv">
        object literal in data bound to style attribute
    </div>
    
    <div :style="[fancyDiv , fancierDiv]">
        multiple objects bound to style attribute
    </div>
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           myFontSize : 24,
           fancyDiv : {
               backgroundColor : 'lightgrey',
               borderRadius : '10px',
               padding : '10px',
               marginTop : '30px'
           },
           fancierDiv : {
               fontFamily : 'Arial, Helvetica',
               border : 'solid 1px black',
               padding : '30px'
           }
       }
    });
</script>
```
```html
<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <input type="number" name="" v-model="myFontSize">
    <div :style="{border : 'solid 2px black', 'margin-bottom': '30px' , fontSize : myFontSize + 'px' }">
        JS object lteral bound to style attribute
    </div>
    <div :style="fancyDiv">
        object literal in data bound to style attribute
    </div>
    
    <div :style="[fancyDiv , fancierDiv]" 
    @mouseover="fancierDiv.border ='dashed 1px blue'"
    @mouseout="fancierDiv.border = 'solid 1px black'">
        multiple objects bound to style attribute
    </div>
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           myFontSize : 24,
           fancyDiv : {
               backgroundColor : 'lightgrey',
               borderRadius : '10px',
               padding : '10px',
               marginTop : '30px'
           },
           fancierDiv : {
               fontFamily : 'Arial, Helvetica',
               border : 'solid 1px black',
               padding : '30px'
           }
       }
    });
</script>
```

### 1-6 Binding to the class atrribute

```html
<!DOCTYPE html>

<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <div class="square" :class="{ blue : cold , red : hot }"></div>
    <div :class="cssClassess"></div>
    <div :class="[squareClass , bgColorClass , { 'dashed-border' : selected }]"></div>
    <input type="checkbox" name="" v-model="selected"/> selected
    <input type="text" v-model="bgColorClass">
</div>

<script>
    var vm = new Vue({
       el: '#app',
       data: {
           cold : true,
           hot : false,
           cssClassess : {
               square : true,
               'dashed-border' : true,
               blue : false
           },
           squareClass : 'square',
           bgColorClass : 'red',
           selected : false
       },
       method : {
           setSquare : function(){
                this.selected = true;
        }
       }
    });
</script>

<style>
    .square {
         width: 200px;
         height: 200px;
         margin-bottom: 20px;
    }
    .blue {
        background-color: blue;
    }
    .red {
        background-color: red;
    }
	.yellow {
        background-color: yellow;
    }
    .dashed-border {
        border: dashed 4px black;
    }
</style>
```


### 2-1 Understanding reactive properties

```js
Constructor Parameter

{
    data:{
        firstName:''
    }
}

Vue Instance 
get firstName(){
    /*
    Register this property and watch
    for changes so we can react.
    Return the value
    */
}
set firstName(){
    /*
    Update the value.
    Re0render any elements that use it.
    */
    }

Virtual DOM Update
When the vitual DOM Chnages
- Compare it to the previous version ("diff" them)
- Identify the components that need to be re-rendered
- Determine the most efficient way to update the actual DOM and apply the updates.
```

```html

```

Ref 
- http://tutorialzine.com/2016/08/building-your-first-app-with-vue-js/
- https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00
- https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2
- https://laracasts.com/series/learn-vue-2-step-by-step