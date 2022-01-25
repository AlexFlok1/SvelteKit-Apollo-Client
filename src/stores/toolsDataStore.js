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
        },
        {
            id:14,
            name: 'WO Scanning Tool',
            department: 'Repair Clamps',
            link: ''
        },
        {
            id:15,
            name: 'Data Tool',
            department: 'Repair Clamps',
            link: ''
        },
        {
            id:16,
            name: 'WO Scanning Tool',
            department: 'Yokes',
            link: ''
        },
        {
            id:17,
            name: 'Production Board',
            department: 'ICB',
            link: ''
        },
        {
            id:18,
            name: 'Live Chart Data',
            department: 'MTConnect',
            link: ''
        },
        {
            id:19,
            name: 'Machine TBH',
            department: 'MTConnect',
            link: ''
        },
        {
            id:20,
            name: 'Machine TBH (BRN)',
            department: 'MTConnect',
            link: ''
        },
        {
            id:21,
            name: 'Hold / Deviation Tool',
            department: 'QA Tools',
            link: ''
        },
        {
            id:22,
            name: 'CAR Tool',
            department: 'QA Tools',
            link: ''
        },
        {
            id:22,
            name: 'Project Management (Coming)',
            department: 'QA Tools',
            link: ''
        }
    ] )
}

fetchData()