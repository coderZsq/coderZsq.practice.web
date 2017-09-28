import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_experience.css';
import PCCareer from './pc_career';

@CSSModules(styles)
export default class PCExperience extends Component {

    render() {
        return (
            <div>
                <div styleName="subtitle">
                    <h1>Experience</h1>
                </div>
                <div styleName="experience">
                    <div styleName="experience-block">
                        <PCCareer time="Jul. 2015 ~ Now" job="Software Engineer" corp="J1 Crop" href="https://www.j1.com" desc1="iOS application development" desc2="Web application development" desc3="New employee skill training & judgement"/>
                        <PCCareer time="Aug. 2013 ~ Feb. 2015" job="Freight Operator" corp="TVL Group" href="http://www.tvlgroups.com/En/ugC_AboutUs.asp" desc1="Freight export operation" desc2="Freight import operation" desc3="Freight sales connection & quotation"/>
                    </div>
                </div>
            </div>
        )
    }
}
