




# NotNdinG : Vue.js with Lynda.com

source : [Learning Vue.js with Lynda.com](https://www.lynda.com/JavaScript-tutorials/Learning-Vue-js/562924-2.html#tab) 
c9 link : [c9.io](https://ide.c9.io/isphins/vue)

## 1. Vue Fundamentals

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

link : [demo 1-1 Data binding](https://bonbonpa.github.io/vuejs-101/Step1-1-Data-binding/hello.html)

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
link : [demo 1-2 Two way Data binding](https://bonbonpa.github.io/vuejs-101/Step1-2-Two-way-databinding/h_plus_sport/subscribe.html)
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
link [demo 1-3 Applying control logic](https://bonbonpa.github.io/vuejs-101/Step1-3-Applying-control-logic/h_plus_sport/subscribe.html)
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

link : [demo 1-4 Event handling](https://bonbonpa.github.io/vuejs-101/Step1-4-Event-handling/h_plus_sport/login.html)

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
link : [demo 1-5 Binding to the style attribute](https://bonbonpa.github.io/vuejs-101/Step1-5-Binding-to-the-style-attribute/style.html)
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
link: [demo 1-6 Binding to the class atrribute](https://bonbonpa.github.io/vuejs-101/Step1-6-Binding-to-the-class-attribute/class.html)
## 2. Features of a Vue Instance

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
<div id="app">
    <p>
        {{firstName}} {{lastName}}
    </p>
    <div v-for="item in framework">{{item}}</div>
    <p>{{browser.name}} {{browser.version}}</p>
</div>

<script>
    var vm = new Vue({
       el: '#app',
       data: {
            firstName: 'Mike',
            lastName : '',
            framework : ['Ember','Angular','React'],
            browser : {
                name : 'Google Chrome'
            }
       }
    });
    vm.lastName = 'SSSSS';
    //in console
   
    //vm.framework[2]
    //>"React"
    //vm.framework[3] = "Vue";
    //>"Vue"
    //vm.framework.push('Vue');
    //>5
    
    //Vue.set(vm.browser, 'version' , 55)
    //Vue.delete(vm.framework,1)
    //
</script>
```
link : [demo 2-1 Understanding reactive properties](https://bonbonpa.github.io/vuejs-101/Step2-1-Understanding-reactive-properties/reactive.html)
### 2-2 Adding computed properties

```html
<div id="app">
    <!--{{firstName}} {{lastName}}-->
    <div>
        <input type="number" v-model.number.lazy="tempFarenheit">
        <!--Temperature in Celsius  : {{Math.round(5/9 * tempFarenheit -32 )}}-->
         Temperature in Celsius  : {{ tempCelsius }}
         <br>
          <!--Temperature in Celsius  : {{ tempCelsiusFunc() }}-->
    </div>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            firstName: 'Mike',
            lastName: 'Sullivan',
            //fullName : this.firstName + ' ' + this.lastName 
            tempFarenheit : 0 
       },
       computed : {
           tempCelsius : function(){
               return Math.round(5/9 * (this.tempFarenheit - 32)) ;
           }
           //computed call when rerender
       },
       methods : {
           tempCelsiusFunc : function(){
               return Math.round(5/9 * (this.tempFarenheit - 32)) ;
           }
       }
       //methods not call when rerender
    });
</script>
```
link : [demo 2-2 Adding computed properties](https://bonbonpa.github.io/vuejs-101/Step2-2-Adding-computed-properties/computed.html)
### 2-3 Adding watchers

```html
<div id="app">
    Got a question for our virtual agent? Just ask!
    <input type="text" v-model="question">
    {{response}}
    <ul>
        <li v-for="product in products">{{product.name}}</li>
    </ul>
</div>

<script>
    vm = new Vue({
        el: '#app',
        data: {
            question: '',
            response: '',
            products : []
        },
        // computed : {
        //   products : function(){
        //       //this needs to return a value immediately, can't wait for Ajax response
        //   }  
        // },
        watch : {
            question : function(newValue){
                if(newValue.indexOf('products') > -1)
                {
                    this.response = 'Sure, I can list the products for you';
                    $.getJSON('https://hplussport.com/api/products')
                    .done(function(data){
                        vm.products = data ;
                    });
                }
                else
                {
                    this.response = "Sorry, I don't understand that question.";
                    this.products = [];
                }
            }
            // watch run asynchronous task
        }
    });
</script>
```
link : [demo 2-3 Adding watchers](https://bonbonpa.github.io/vuejs-101/Step2-3-Adding-watchers/virtual-agent.html)
### 2-4 Using lifecycle hooks

#### Available Hooks

**beforeCreate**
- Before instance initialization

**Created**
- Reactive properties configured; instance not yet mounted

**beforeMount**
- Template complied; ready to be inserted in DOM

**Mounted** 
- Template inserted in DOM, replacing "el" element

**beforeUpdate**
- Data changed; update pending

**Upddated**
- Re-rendered to reflect changes

**beforeDestroy**
- vm.$destroy() call

**Destroyed**
- Watchers and event handlers removed; no reactivity


```html
   <div id="app">
                    Got a question for our virtual agent? Just ask!
                    <input type="text" v-model="question"> {{response}}
                    <ul>
                        <li v-for="product in products">{{product.name}}</li>
                    </ul>
                </div>

                <script>
                    var vm = new Vue({
                        el: '#app',
                        data: {
                            question: '',
                            response: '',
                            products: []
                        },
                        beforeCreate: function() {
                            console.log('beforeCreate');
                        },
                        created: function() {
                            console.log('created');
                            this.question = 'A default question about products?';
                        },
                        beforeMount: function() {
                            console.log('beforeMount');
                        },
                        mounted: function() {
                            console.log('mounted');
                        },
                        beforeUpdate: function() {
                            console.log('beforeUpdate');
                        },
                        updated: function() {
                            console.log('updated');
                        },
                        beforeDestroy: function() {
                            console.log('beforeDestroy');
                        },
                        destroyed: function() {
                            console.log('destroyed');
                        },
                        watch: {
                            question: function(newValue) {
                                if (newValue.indexOf('products') > -1) {
                                    console.log('API call');
                                    this.response = "Sure, I can list the products for you.";
                                    $.getJSON('https://hplussport.com/api/products')
                                        .done(function(data) {
                                            console.log('API response');
                                            vm.products = data;
                                        });
                                }
                                else {
                                    this.response = "Sorry, I don't understand this question.";
                                    this.products = [];
                                }
                            }
                        }
                    });
                    
                    //vm.$destroy();
                    
                </script>


```
link : [demo 2-4 Using lifecycle hooks](https://bonbonpa.github.io/vuejs-101/Step2-4-Using-lifecyclehooks/lifecycle.html)
## 3. Vue Components

### 3-1 Registering and using components

```html
<div id="app">
    <global-component></global-component>
    <local-component></local-component>
    <local-component></local-component>
</div>

<script>
    Vue.component('global-component',{
        template : '<div> a global component</div>'
    });
    var LocalComponent = { 
        // template : '<div @click="showNum()">a local component <div>The number {{num}}</div></div>',
        template : '<div @click="showNum()">a local component </div>',
        data : function(){
            return {
                num : Math.random()
            };
        },
        methods:{
            showNum : function()
            {
                alert('My number is '+ this.num);
            }
        }
        
    };
    new Vue({
       el: '#app',
       data: {
           num: 42
       },
       components : {'local-component' : LocalComponent}
    });
</script>

<style>
    div#app {
        border: none;
    }
    div {
        border: solid 2px black;
        margin-bottom: 20px;
        padding: 10px;
    }
</style>
```
link : [demo 3-1 Registering and using components]()
### 3-2 Using component props

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <product-list :products="theProducts" the-title="Shop our award-winning product line"></product-list>
</div>

<script>
//------------------------------------
Vue.component('product-list', 
{
    template: `
        <div class="product-list"> <h2>{{theTitle}}</h2> 
            <ul>
                <li v-for="product in products">
                    <img :src="product.image">
                    <p><strong>{{product.name}}</strong></p>
                    <p>{{product.image_title}}</p>
                </li>
            </ul>
        </div>`,
    props: ['theTitle', 'products'] //---- props
});

var vm = new Vue({
    el: '#app',
    data: {
        theProducts: []
    },
    created: function() {
        $.ge('https://hplussport.com/api/products')
            .done(function(data) {
                vm.theProducts = data;
                console.log(data);
            });
    }
});
</script>

<style>
    .product-list h2 {
        margin-bottom: 40px;
    }
                    
    .product-list ul img {
        float: left;
        width: 300px;
    }
                    
    .product-list ul {
        list-style-type: none;
    }
                    
    .product-list li {
        margin-bottom: 40px;
        clear: both;
    }
</style>
```
link : [demo 3-2 Using component props](https://bonbonpa.github.io/vuejs-101/Step3-2-Using-component-props/products.html)
#### 3-3 Composing and swapping components

```html
 <script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

                <div id="app">
                    <!--<product-list :products="theProducts" the-title="Shop our award-winning product line"></product-list>-->
                    <button v-if="listType == 'product-list'" @click="listType = 'product-list-simple'">Show less detail</button>
                    <button v-else @click="listType = 'product-list'">Show more detail</button>
                    <component :is="listType" :products="theProducts" the-title="Shop our award-winning product line"></component>
                </div>

                <script>
                    Vue.component('product-list', {
                        template: '<div class="product-list">\
                                    <h2>{{theTitle}}</h2>\
                                    <ul>\
                                        <product-list-item v-for="product in products" :product="product">\
                                        </product-list-item>\
                                    </ul>\
                                </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-simple', {
                        template: '<div class="product-list">\
                                    <h2>{{theTitle}}</h2>\
                                    <ul>\
                                       <li v-for="product in products">\
                                        <img :src="product.image" class="small">{{product.name}}\
                                        </li>\
                                    </ul>\
                                </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-item', {
                        template: '<li>\
                            <img :src="product.image">\
                            <p><strong>{{product.name}}</strong></p>\
                            <p>{{product.description}}</p>\
                        </li>',
                        props: ['product']
                    });

                    var vm = new Vue({
                        el: '#app',
                        data: {
                            theProducts: [],
                            listType: 'product-list'
                        },
                        created: function() {
                            $.getJSON('https://hplussport.com/api/products')
                                .done(function(data) {
                                    vm.theProducts = data;
                                });
                        }
                    });
                </script>

                <style>
                    .product-list h2 {
                        margin-bottom: 40px;
                    }
                    
                    .product-list ul img {
                        float: left;
                        width: 300px;
                    }
                    
                    .product-list ul {
                        list-style-type: none;
                    }
                    
                    .product-list li {
                        margin-bottom: 40px;
                        clear: both;
                    }
                    
                    .product-list img.small {
                        width: 100px;
                    }
                    
                    .product-list img.small {
                        width: 100px;
                    }
                </style>
```
link : [demo 3-3 Composing and swapping components](https://bonbonpa.github.io/vuejs-101/Step3-3-Composing-and-swapping-components/products.html)
#### 3-4 Managing-content-withs-slots

```html
           <script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

                <div id="app">
                    <product-list the-title="Shop our award-winning product line" :products="theProducts">
                        <p slot="top">All items on sale now!</p>
                        <em slot="bottom">Limited availability order soon.</em>
                    </product-list>
                    <product-list-flexible :products="theProducts" the-title="Custom layout">
                        <template scope="props">
                            <strong>{{props.product.name}} </strong> - {{props.product.description}}
                        </template>
                    </product-list-flexible>
                </div>

                <script>
                    Vue.component('product-list', {
                        template: '<div class="product-list">\
                        <h2>{{theTitle}}</h2>\
                        <slot name="top">Watch this space for message!</slot>\
                        <ul>\
                            <product-list-item v-for="product in products" :product="product">\
                            </product-list-item>\
                            <li><slot name="bottom"></slot></li>\
                        </ul>\
                    </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-flexible', {
                        template: '<div class="product-list">\
                        <h2>{{theTitle}}</h2>\
                        <ul>\
                           <li v-for="product in products">\
                            <slot :product="product"></slot>\
                           </li>\
                        </ul>\
                    </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-item', {
                        template: '<li>\
                    <img :src="product.image">\
                    <p><strong>{{product.name}}</strong></p>\
                    <p>{{product.description}}</p>\
                  </li>',
                        props: ['product']
                    });

                    var vm = new Vue({
                        el: '#app',
                        data: {
                            theProducts: []
                        },
                        created: function() {
                            $.getJSON('https://hplussport.com/api/products')
                                .done(function(data) {
                                    vm.theProducts = data;
                                });
                        }
                    });
                </script>
```

link : [demo 3-4 Managing-content-withs-slots](Step3-4-Managing-content-with-slots/products-slots.html)

## 3-5 Handling events with components

```html

```


Ref 
- http://tutorialzine.com/2016/08/building-your-first-app-with-vue-js/
- https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00
- https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2
- https://laracasts.com/series/learn-vue-2-step-by-step
