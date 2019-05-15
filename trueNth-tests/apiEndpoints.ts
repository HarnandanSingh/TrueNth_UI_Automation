import { Environment } from './envs';

/*
    Articles function - takes inputs to construct an endpoint
    and returns the endpoint to the caller.
*/
export const Articles = (lifeChange: string = '', treatment: string = '') => 
                            `${Environment.url()}/api/articles/?life_change=${lifeChange}&treatment=${treatment}`;


/*
    Create functions to construct other endpoints in the same way as the Articles funciton.

    Not all endpoints may need inputs, in which case just return the endpoint as is, but make
    sure to give the function a meaningful name i.e. it should represent what the api endpoint is for.
*/