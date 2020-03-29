import React, { Component } from 'react';
import datas from '../src/data'



class WorkExperience extends Component {
	render() {
		return (
            <div>
                {
                  datas.experiences.map((skill, i) => {
                    return (
                      <div key={i}>
                        <h4>{skill.company}</h4>

                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default WorkExperience;