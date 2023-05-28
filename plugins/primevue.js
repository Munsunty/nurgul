import PrimeVue from 'primevue/config'


import Toolbar from "primevue/toolbar";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

import Tooltip from "primevue/tooltip";

import ScrollPanel from 'primevue/scrollpanel';
import Divider from 'primevue/divider'
import Card from 'primevue/card'
import Steps from 'primevue/steps'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Panel from 'primevue/panel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  
    nuxtApp.vueApp.component('Toolbar', Toolbar)
    nuxtApp.vueApp.component('SplitButton', SplitButton)
    nuxtApp.vueApp.component('SplitterPanel', SplitterPanel)
    nuxtApp.vueApp.component('Splitter', Splitter)
 
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
    nuxtApp.vueApp.component('Divider', Divider)
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('Steps', Steps)
    nuxtApp.vueApp.component('TabPanel', TabPanel)
    nuxtApp.vueApp.component('TabView', TabView)
    nuxtApp.vueApp.component('Panel', Panel)
    nuxtApp.vueApp.component('Accordion', Accordion)
    nuxtApp.vueApp.component('AccordionTab', AccordionTab)
    

    
    
    

    



    nuxtApp.vueApp.directive('tooltip', Tooltip)

    


    useState('cart',()=>([]));
    useState('scrollNum',()=>0);




    //
    // let opt = 'width=1280, height=720, menubar=no,toolbar=no,status=no,location=no';
    // window.open('http://localhost:3000/',null,opt)


    //other components that you need
})
