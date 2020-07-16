import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'personSearch'
})
export class HotelSearchPipe implements PipeTransform {
    transform(items: any, nameSearch: string, roomType:string){
        if (items && items.length){
            return items.filter(item =>{
                if (nameSearch && item.Location.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                    return false;
                }
                if (roomType && item.room.toLowerCase().indexOf(roomType.toLowerCase()) === -1){
                    return false;
                }
                // if (companySearch && item.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
                //     return false;
                // }
                return true;
           })
        }
        else{
            return items;
        }
    }
}