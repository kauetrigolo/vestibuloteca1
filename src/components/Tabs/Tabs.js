import './tabs.css';
import Card from '../Card/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import logoenem from '../../img/logoEnem.svg'

export default function TabComponent(){

    return(

    <Tabs className="tabs">
        <TabList className='tabHeader'>
        <Tab className="tabItem">Enem</Tab>
        <Tab className="tabItem">Fuvest</Tab>
        <Tab className="tabItem">Unicamp</Tab>
        <Tab className="tabItem">Unesp</Tab>
        <Tab className="tabItem">UFPR</Tab>
        <Tab className="tabItem">UFSC</Tab>
        <Tab className="tabItem">UERJ</Tab>
        <Tab className="tabItem">UnB</Tab>
        </TabList>

        <TabPanel className="tabContent">
        <h2>ENEM</h2>
        <Card id={`6519f99fea706673814c2a94`} ></Card>
        <Card></Card>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>FUVEST</h2>
        <Card></Card>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UNICAMP</h2>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UNESP</h2>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UFPR</h2>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UFSC</h2>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UERJ</h2>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UnB</h2>
        </TabPanel>
  </Tabs>

    )
}