import React from "react";
import FacebookLogin from 'react-facebook-login';

const response = (response) => {
    console.log(response)
}

function LoginFacebook() {

    return <div>
        <FacebookLogin
            appId="591199952660696"
            autoLoad={true}
            fields={"name,email,picture"}
            callback={response}
        />
    </div>
}

export default LoginFacebook