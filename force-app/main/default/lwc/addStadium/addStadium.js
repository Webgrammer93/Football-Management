import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OBJECT from '@salesforce/schema/Stadium_Register__c';
import SR_ROLE_FIELD from '@salesforce/schema/Stadium_Register__c.Stadium_Role__c';
import SR_STADIUM_LK_FIELD from '@salesforce/schema/Stadium_Register__c.Stadium__c';
import SR_FC_LK_FIELD from '@salesforce/schema/Stadium_Register__c.Football_Club__c';

export default class AddStadium extends LightningElement {

    @api recordId

    object = OBJECT;
    fields = [SR_FC_LK_FIELD, SR_STADIUM_LK_FIELD, SR_ROLE_FIELD];

    onSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Stadium Registry Created',
            message: 'Stadium Registry Record ID - ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
        const editForm = this.template.querySelector('lightning-record-form');
        editForm.recordId = null;
    }

    onError(event){
        const evt = new ShowToastEvent({
            title: 'Error on Create',
            message: event,
            variant: 'error',
        });
        this.dispatchEvent(evt);
    }


}