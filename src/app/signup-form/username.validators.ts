import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ')>=0)
            return {
                cannotContainSpace: {
                    cannotContainSpace: true,
                    foundAt: control.value.indexOf(' ')    
                },
                
            };  
        
        return null;
    }
}