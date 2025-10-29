"use client"

import { useAuth } from '@clerk/nextjs';
import { CustomJwtSessionClaims } from '@repo/types';

const UnauthorizedPage = () => {
    const { userId, sessionClaims, signOut } = useAuth();
    if (userId && sessionClaims) {
        const userRole = (sessionClaims as CustomJwtSessionClaims).metadata?.role;
        console.log(sessionClaims);
    }
    return (
        <div>
            <h1>You do not have an access!</h1>
            <button onClick={() => signOut()} >Sign out</button>
        </div>
    )
}

export default UnauthorizedPage