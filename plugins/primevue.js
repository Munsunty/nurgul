import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from "primevue/toolbar";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import DataTable from "primevue/datatable";
import TreeTable from "primevue/treetable";
import Column from "primevue/column";
import InputNumber from "primevue/inputnumber";
import Row from "primevue/row";
import PickList from "primevue/picklist";
import Menubar from "primevue/menubar";
import Dock from "primevue/dock";
import Tooltip from "primevue/tooltip";
import OrganizationChart from "primevue/organizationchart";
import Tree from "primevue/tree";
import Dialog from "primevue/dialog";
import TreeSelect from "primevue/treeselect";
import CascadeSelect from "primevue/cascadeselect";
import Skeleton from "primevue/skeleton";
import ColumnGroup from "primevue/columngroup";
import OrderList from "primevue/orderlist";
import Slider from "primevue/slider";
import ScrollPanel from 'primevue/scrollpanel';
import Divider from 'primevue/divider'
import Card from 'primevue/card'
import Steps from 'primevue/steps'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Panel from 'primevue/panel';



export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('TreeTable', TreeTable)
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
    nuxtApp.vueApp.component('Row', Row)
    nuxtApp.vueApp.component('Column', Column)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('DataTable', DataTable)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Toolbar', Toolbar)
    nuxtApp.vueApp.component('SplitButton', SplitButton)
    nuxtApp.vueApp.component('SplitterPanel', SplitterPanel)
    nuxtApp.vueApp.component('Splitter', Splitter)
    nuxtApp.vueApp.component('InputNumber', InputNumber)
    nuxtApp.vueApp.component('PickList', PickList)
    nuxtApp.vueApp.component('Menubar', Menubar)
    nuxtApp.vueApp.component('Dock', Dock)
    nuxtApp.vueApp.component('OrganizationChart', OrganizationChart)
    nuxtApp.vueApp.component('Tree', Tree)
    nuxtApp.vueApp.component('Dialog', Dialog)
    nuxtApp.vueApp.component('TreeSelect', TreeSelect)
    nuxtApp.vueApp.component('CascadeSelect', CascadeSelect)
    nuxtApp.vueApp.component('Skeleton', Skeleton)
    nuxtApp.vueApp.component('OrderList', OrderList)
    nuxtApp.vueApp.component('Slider', Slider)
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
    nuxtApp.vueApp.component('Divider', Divider)
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('Steps', Steps)
    nuxtApp.vueApp.component('TabPanel', TabPanel)
    nuxtApp.vueApp.component('TabView', TabView)
    nuxtApp.vueApp.component('Panel', Panel)

    
    
    

    



    nuxtApp.vueApp.directive('tooltip', Tooltip)

    


    useState('cart',()=>([]));
    useState('scrollNum',()=>0);




    //
    // let opt = 'width=1280, height=720, menubar=no,toolbar=no,status=no,location=no';
    // window.open('http://localhost:3000/',null,opt)


    //other components that you need
})
