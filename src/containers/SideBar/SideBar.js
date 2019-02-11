import React from 'react';
import { Menu, Divider, Sidebar } from 'semantic-ui-react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import './SideBar.scss';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';
import { Subscriptions } from './Subscriptions/Subscriptions';

export class SideBar extends React.Component {
    render() {
        return (
            <Menu vertical borderless stackable fixed='left' className='side-nav' >
                <SideBarItem highlight={true}  label='Home' icon='home'/>
                <SideBarItem label='Trending' icon='fire'/>
                <SideBarItem label='Followers' icon='spy'/>
                <Divider />
                <SideBarHeader title='library' />
                <SideBarItem label='History' icon='history'/>
                <SideBarItem label='Watch later' icon='clock'/>
                <SideBarItem label='Liked videos' icon='thumbs up'/>
                <Divider />
                <Subscriptions />
                <SideBarHeader title='More from Youtube'/>
                <SideBarItem label='Movies and Shows' icon='film'/>
                <Divider />
                <SideBarItem label='Report history' icon='flag'/>
                <SideBarItem label='Help' icon='help circle'/>
                <SideBarItem label='Send feedback' icon='comment'/>
                <SideBarFooter/>
            </Menu>
        )
    }
}

export default SideBar;