'use client';

import React, { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Button } from 'flowbite-react';

interface IUser {
    name: string;
    email: string;
    picture: string;
}


const UserInfo = ({ user }: { user: IUser }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>
                <strong>Name:</strong>
                {user.name}</p>
            <p>
                <strong>Email:</strong>
                {user.email}</p>
            <img
                src={user.picture}
                alt={user.name}
                style={{ width: '100px', height: '100px' }}
            />
        </div>
    );
};

function Login() {
    const [user, setUser] = useState<IUser | null>(null);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
        },
        scope: 'https://www.googleapis.com/auth/documents',
    });
    return (
        <div>
            <Button onClick={() => login()}>Sign in with Google 🚀</Button>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);

                    if (credentialResponse.credential) {
                        const decodedToken: any = jwtDecode(credentialResponse.credential);

                        setUser({
                            name: decodedToken.name,
                            email: decodedToken.email,
                            picture: decodedToken.picture,
                        });
                    }
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            {user != null && <UserInfo user={user} />}
        </div>
    );
}

export default Login;
