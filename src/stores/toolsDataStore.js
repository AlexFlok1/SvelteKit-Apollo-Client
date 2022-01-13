import { writable } from 'svelte/store'

export const allTools = writable( [] )

const fetchData = async () => {
    const url=''
    /*const res = await fetch( url, {
        method: 'GET',
        query: 
    } )*/
    allTools.set( [
        {
            id:1,
            name: 'HMC1 and HMC2 Stations',
            department: 'Ser Saddle',
            link: ''
        },
        {
            id:2,
            name: 'GLue Station',
            department: 'Ser Saddle',
            link: ''
        },
        {
            id:3,
            name: 'Assembly Station',
            department: 'Ser Saddle',
            link: ''
        },
        {
            id:4,
            name: 'Packout Station',
            department: 'Ser Saddle',
            link: ''
        },
        {
            id:5,
            name: 'Grinding Station',
            department: 'Tapping Sleeve',
            link: ''
        },
        {
            id:6,
            name: 'Roller Station',
            department: 'Tapping Sleeve',
            link: ''
        },
        {
            id:7,
            name: 'Rubbermold Dashboard',
            department: 'Rubbermold',
            link: ''
        },
        {
            id:8,
            name: 'Data Entry',
            department: 'Rubbermold',
            link: ''
        },
        {
            id:9,
            name: 'Pull List Entry',
            department: 'Tapping Sleeve',
            link: ''
        },
        {
            id:10,
            name: 'Supervisor Tool',
            department: 'Rubbermold',
            link: ''
        },
        {
            id:11,
            name: 'OEE Alert Tool',
            department: 'Rubbermold',
            link: ''
        },
        {
            id:12,
            name: 'Shipping Containers Ledger',
            department: 'Rubbermold',
            link: ''
        },
        {
            id:13,
            name: 'Tote Cure Time',
            department: 'Rubbermold',
            link: ''
        }
    ] )
}

fetchData()