import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class JwtUtils {

    decodeToken(token: string): any {
        try{
            const payload = token.split('.')[1];
            const decodedPayload = atob(payload);
            return JSON.parse(decodedPayload);

        }catch(error){
            console.error('Invalid token', error);
            return null;
        }
    }

    getRoles(token: string): string[] {
        const decoded = this.decodeToken(token);
        return decoded?.roles || [];
    }

    getEmail(token: string): string | null {
        const decoded = this.decodeToken(token);
        return decoded?.sub || '';
    }

    isExpired(token: string): boolean {
        const decoded = this.decodeToken(token);
        if (!decoded || !decoded.exp) {
            return true;
        }
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    }

}