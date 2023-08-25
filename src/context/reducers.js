/* eslint-disable prettier/prettier */
export default function (state, action) {
    switch (action.type) {
        case 'Add_User':
            return {...state,email: action.payload.email, name:action.payload.name};  //...state gönderiyoruz çünkü değişmeyen datalar varsa onların değişmeden dönmesi gerek
            //liste gibi bir şey olsaydı return [...state.list, liste:action.payload.data]; şeklinde olmalı
        default:
            return state;
    }
}

