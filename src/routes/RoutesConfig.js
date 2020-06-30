import AgentWorkQueue from '../modules/AgentWork/AgentContainer';
const config = [
    {
        path: '/agent-work',
        component: AgentWorkQueue,
        exact:true,
    },
    {
        path: '/', //default
        component: AgentWorkQueue,
    }
]

export default config;