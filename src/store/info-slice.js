import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        infoList: [],
    },
    reducers:{
        addToList(state, action){
            const item = action.payload;
            state.infoList.push({
                id: item.id,
                image: item.image,
                owner: item.owner,
                name: item.name,
                description: item.description,
                visibility: item.visibility,
                watchers: item.watchers
            })
        },
        clearList(state){
            state.infoList = [];
        }
    }
})

export const infoActions = infoSlice.actions;

export default infoSlice;