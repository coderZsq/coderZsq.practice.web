import React, {Component} from 'react';
import MobileHome from './mobile_home';
import MobileProjects from './mobile_projects';
import MobileExperience from './mobile_experience';
import MobileContact from './mobile_contact';

export default class MobileIndex extends Component {

    render() {
        return (
            <div>
                <MobileHome/>
                <MobileProjects/>
                <MobileExperience/>
                <MobileContact/>
            </div>
        )
    }
}
