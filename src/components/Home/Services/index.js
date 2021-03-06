import React from 'react';
import Icon1 from '../../../images/doctors.svg';
import Icon2 from '../../../images/doctors.svg';
import Icon3 from '../../../images/doctors.svg';
import { ServicesContainer, ServicesH1,ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>How We help you</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> We help reduce your fees</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual meeting</ServicesH2>
                    <ServicesP> We can access our platform online</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Predict disease using Machine learning</ServicesH2>
                    <ServicesP> Which help you understand risk</ServicesP>
                </ServicesCard>        
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
