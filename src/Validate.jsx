export default function Validate1 (values)  {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }
    if(values.guest){
        if (!values.guestName) {
            errors.guestName = 'guestName is required';
        }
}

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.age) {
        errors.age = 'age is required';
    } else if (values.experience<=0 || values.experience>100) {
        errors.age = 'age should be betweeen 0 to 100';
    }

    return errors;
}

    export function Validate2 (values){
const errors={};
    const phoneRegex = /^[+]{1}(?:[0-9\-()\/\.]\s?){6,15}[0-9]{1}$/;
    const urlPattern =
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.phone) {
            errors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(values.phone)) {
            errors.phone = 'Invalid phone number';
        }
        if(!values.position){
            errors.position="position is required "
        }
        if(values.position){
            if (values.position === "developer " || values.position=== "Manager") {
                if(!values.experience){
                    errors.experience="experience is required"
                } else if (values.experience<=0 || values.experience>100) {
                errors.experience = 'experience should be betweeen 0 to 100';
            }
        }
        if (values.position === "designer " ){
            if(!values.url){
                errors.url="url is required"
            }
             else if (!urlPattern.test(values.url)) {
            errors.url = 'URL must be valid';
        }
    }
      
    }
    return errors; 
}  

export function Validate3(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.survey) {
        errors.survey = 'Survey topic is required';
    }

    if (values.survey === 'technology') {
        if (!values.technology) {
            errors.technology = 'Technology field is required';
        }
    }

    if (values.survey === 'health') {
        if (!values.exercise) {
            errors.exercise = 'Exercise field is required';
        }
        if (!values.diet) {
            errors.diet = 'Diet field is required';
        }
    }

    if (values.survey === 'education') {
        if (!values.education) {
            errors.education = 'Education field is required';
        }
    }
    if (!values.study) {
        errors.study = 'Field of study is required';
    }
    if (!values.feedback) {
        errors.feedback = 'Feedback is required';
    }

    return errors;
};

