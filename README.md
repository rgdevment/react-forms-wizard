# React Wizard Form

### Require
* React
* prop-types

**Live Example:** [https://mariodevment.github.io/](https://mariodevment.github.io/)

![React Form Image](./src/asset/react-wizard-form.gif)

**Live Example:** [https://mariodevment.github.io/](https://mariodevment.github.io/)

## Use:

`import { StepWizard } from 'react-form-wizard';`

#### create Steps
	const steps = [
		{ name: 'This is', component: <StepOne /> },							{ name: 'Only one', component: <StepTwo />, preventNext: false },
		{ name: 'Example', component: <StepThree /> },
		{ name: 'Step', component: <StepFour /> },
		{ name: 'Form', component: <StepFive /> }
	];

#### In render:

    <StepWizard
    	steps={ steps }
    	sendAction={ () => alert( 'Send' ) }
    	printAction={ () => alert( 'Print' ) }/>
    	
## Optional configuration props:

    navigationBtn: {
    	cls: 'btn btn-info',
    	positionPrev: 'float-left',
    	positionNext: 'float-right',
    	titlePrev: 'Previous',
    	titleNext: 'Next',
    },
    sendBtn: {
        cls: 'btn btn-danger',
    	title: 'Send',
    	position: 'float-right',
    },
    printBtn: {
        enable: true,
    	cls: 'btn btn-primary',
    	position: 'float-right',
    	title: 'Print Resume',
    }
    
## Validation: Soon.



---

Necesitaba un Wizard-Form, para mis proyectos, lamentablemente no encontré nada que se adecuara a mis necesidades y termine desarrollando esta pequeña utilizad inspirándome en los ya existente.