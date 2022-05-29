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
        title: "gym "
    },
]


// store initial state
const initialState = {
    lists: {
        "list-1" : {
            id: "list-1",
            title: "backlog",
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
       const item  = store.lists[id] //list-id
       console.log(item)
    //    ubah titlenya 
      var a = item.title =text //nilai yg di ubah yg di input
       console.log(a)
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
        const item = store.lists[listId]
        const hapusCard = item.cards.filter(card =>card.id !== cardId)
        item.cards = hapusCard
        const newStore = {
            ...store,
            lists:{
              ...store.lists,
              [listId] : item
            }
        }
        setStore(newStore)
    }

    return(
        <DataContex.Provider value={{ store, changeTitle, cardDelete}}>
            {props.children}
        </DataContex.Provider>
    )
}