import React, {createContext, useState} from 'react';

const cards = [
    {
        id: 'card-1',
        title: "learning code"
    },
    {
        id: 'card-2',
        title: "learning database"
    },
    {
        id: 'card-3',
        title: "play game "
    },
]


// store initial state
const initialState = {
    lists: {
        "list-1" : {
            id: "list-1",
            title: "Task Lists",
            cards: cards
        },
        "list-2" : {
            id: "list-2",
            title: "On Progress",
            cards: []
        }
    },
    listIds: ["list-1", "list-2"]
}

export const DataContex = createContext()
export const DataProvider = (props) => {
    const [store, setStore] = useState(initialState)
    // fungsi ganti title yg di form
    const changeTitle = (id, text) => {
        // ambil id yg stor.list
       const item  = store.lists[id] //list-id,title dan array card
    //    console.log(item)
    //    ubah titlenya 
        item.title =text //nilai yg di ubah yg di input
    
       const newStore = {
           ...store,
           lists: {
               ...store.lists,
               [id] : item
           }
       }
    //    ubah storenya 
    setStore(newStore)
    }

    // fungsi delete component card jika icon delet d onclick ke hapus
    const cardDelete =(listId,cardId) => {
        const item = store.lists[listId] //list-id serta isi objek cards
        const hapusCard = item.cards.filter(card =>card.id !== cardId)
        var b = item.cards = hapusCard //nilai yg di ubah yg di input
        console.log(b);
        const newStore = {
            ...store,
            lists:{
              ...store.lists,
              [listId] : item
            }
        }
        setStore(newStore)
    }

    // fungsi edit component card jika textnya di click
    const cardEdit  = (IdList, IdCard, idx, text) => {
    //    ambil data store.lists serta parameter IdListnhya
        const item = store.lists[IdList]
        // console.log(item.lists[listIdss]);
        const cards = item.cards.find(itm => itm.id === IdCard)
        // console.log(cards)
        // ganti card title
        cards.title = text
        item.cards.splice(idx, 1, cards)
        // console.log(item)
        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [IdList] : item
            }
        }
        setStore(newStore);

    }

    return(
        <DataContex.Provider value={{ store, changeTitle, cardDelete, cardEdit }}>
            {props.children}
        </DataContex.Provider>
    )
}